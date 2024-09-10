var http = require('http');
var fs = require('fs');
var index = fs.readFileSync('index.html');

var SerialPort = require('serialport');
const parsers = SerialPort.parsers;

const parser = new parsers.Readline({
    delimiter: '\r\n'
});

var port = new SerialPort('/dev/cu.usbmodem101', { 
    baudRate: 9600,
    dataBits: 8,
    parity: 'none',
    stopBits: 1,
    flowControl: false
});

port.pipe(parser);

var app = http.createServer(function(req, res) {
    if (req.url === '/style.css') {
        fs.readFile('style.css', function(err, data) {
            if (err) {
                res.writeHead(404);
                res.end('CSS file not found');
            } else {
                res.writeHead(200, {'Content-Type': 'text/css'});
                res.end(data);
            }
        });
    } else {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end(index);
    }
});

var io = require('socket.io').listen(app);

io.on('connection', function(socket) {
    console.log('Node is listening to port');

    socket.on('lights', function(data) {
        console.log(data);
        port.write(data.status);
    });
});

parser.on('data', function(data) {
    console.log('Received data from port: ' + data);
    io.emit('data', data);
});

app.listen(3000);
