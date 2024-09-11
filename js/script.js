let portOpen = false; // tracks whether a port is corrently open
let portPromise; // promise used to wait until port succesfully closed
let holdPort = null; // use this to park a SerialPort object when we change settings so that we don't need to ask the user to select it again
let port; // current SerialPort object
let reader; // current port reader object so we can call .cancel() on it to interrupt port reading
let buffer = ""; // Buffer to store partial data

// Do these things when the window is done loading
window.onload = function () {
  // Check to make sure we can actually do serial stuff
  if ("serial" in navigator) {
    // The Web Serial API is supported.
    // Connect event listeners to DOM elements
    document
      .getElementById("openclose_port")
      .addEventListener("click", openClose);
    document.getElementById("change").addEventListener("click", changeSettings);
    document.getElementById("clear").addEventListener("click", clearTerminal);
    document.getElementById("send").addEventListener("click", sendString);
    document
      .getElementById("term_input")
      .addEventListener("keydown", detectEnter);

    // Clear the term_window textarea
    clearTerminal();

    // See if there's a prefill query string on the URL
    const params = new Proxy(new URLSearchParams(window.location.search), {
      get: (searchParams, prop) => searchParams.get(prop),
    });
    // Get the value of "some_key" in eg "https://example.com/?some_key=some_value"
    let preFill = params.prefill; // "some_value"
    if (preFill != null) {
      // If there's a prefill string then pop it into the term_input textarea
      document.getElementById("term_input").value = preFill;
    }
  } else {
    // The Web Serial API is not supported.
    // Warn the user that their browser won't do stupid serial tricks
    alert("The Web Serial API is not supported by your browser");
  }

  // Mousemove listener to track X and Y positions of the mouse
  window.addEventListener("mousemove", function (event) {
    // Get the X and Y coordinates of the mouse pointer
    let xPos = event.clientX; // X position relative to the viewport
    let yPos = event.clientY; // Y position relative to the viewport

    // Display the X and Y coordinates in the HTML
    document.getElementById("x-pos").innerText = xPos;
    document.getElementById("y-pos").innerText = yPos;

    console.log(`X: ${xPos}, Y: ${yPos}`); // Optionally log it to the console
  });
};

// This function is bound to the "Open" button, which also becomes the "Close" button
// and it detects which thing to do by checking the portOpen variable
async function openClose() {
  // Is there a port open already?
  if (portOpen) {
    // Port's open. Call reader.cancel() forces reader.read() to return done=true
    // so that the read loop will break and close the port
    reader.cancel();
    console.log("attempt to close");
  } else {
    // No port is open so we should open one.
    // We write a promise to the global portPromise var that resolves when the port is closed
    portPromise = new Promise((resolve) => {
      // Async anonymous function to open the port
      (async () => {
        // Check to see if we've stashed a SerialPort object
        if (holdPort == null) {
          // If we haven't stashed a SerialPort then ask the user to select one
          port = await navigator.serial.requestPort();
        } else {
          // If we have stashed a SerialPort then use it and clear the stash
          port = holdPort;
          holdPort = null;
        }
        // Grab the currently selected baud rate from the drop down menu
        var baudSelected = parseInt(document.getElementById("baud_rate").value);
        // Open the serial port with the selected baud rate
        await port.open({ baudRate: baudSelected });

        // Create a textDecoder stream and get its reader, pipe the port reader to it
        const textDecoder = new TextDecoderStream();
        reader = textDecoder.readable.getReader();
        const readableStreamClosed = port.readable.pipeTo(textDecoder.writable);

        // If we've reached this point then we're connected to a serial port
        // Set a bunch of variables and enable the appropriate DOM elements
        portOpen = true;
        document.getElementById("openclose_port").innerText = "Close";
        document.getElementById("term_input").disabled = false;
        document.getElementById("send").disabled = false;
        document.getElementById("clear").disabled = false;
        document.getElementById("change").disabled = false;

        // NOT SUPPORTED BY ALL ENVIRONMENTS
        // Get port info and display it to the user in the port_info span
        let portInfo = port.getInfo();
        document.getElementById("port_info").innerText =
          "Connected to device with VID " +
          portInfo.usbVendorId +
          " and PID " +
          portInfo.usbProductId;

        // Serial read loop. We'll stay here until the serial connection is ended externally or reader.cancel() is called
        // It's OK to sit in a while(true) loop because this is an async function and it will not block while it's await-ing
        // When reader.cancel() is called by another function, reader will be forced to return done=true and break the loop
        while (true) {
          const { value, done } = await reader.read();
          if (done) {
            reader.releaseLock(); // release the lock on the reader so the owner port can be closed
            break;
          }

          // Append the incoming value to the buffer
          buffer += value;

          // Split the buffer by newline to process complete lines
          let lines = buffer.split("\n");

          // Process all complete lines except the last one (which may be incomplete)
          for (let i = 0; i < lines.length - 1; i++) {
            let line = lines[i].trim(); // Clean up any extra spaces or carriage returns

            // Assuming 'line' contains a number that you want to use to change the width
            let parsedValue = parseInt(line, 10); // Parse the value as an integer
            /* --------------- */
            /* --------------- */
            /* --------------- */
            /* --------------- */
            /* --------------- */
            /* --------------- */

            /* CHANGE THE CODE HERE */

            // Check if the parsed value is a valid number
            if (!isNaN(parsedValue)) {
              // Update the width of the loading bar with the received value

              document.getElementById("loading").style.width =
                parsedValue + "%";

              //change background color with RGB and Alpha
              // document.getElementsByClassName(
              //   "wrapper"
              // )[0].style.backgroundColor = `rgba(${
              //   parsedValue * 3
              // }, 0, 0, 0.8)`;

              //change font size by value
              // document.getElementsByClassName("text")[0].style.fontSize =
              //   parsedValue * 2 + "px";

              //change font size
              document.getElementsByClassName("text")[0].style.fontSize =
                100 + "px";

              //change the variable font weights
              document.getElementsByClassName(
                "text"
              )[0].style.fontVariationSettings = `"wght" ${
                parsedValue * 8
              }, "ital" ${parsedValue}, "SRFF" ${parsedValue * 3}`;

              // display data
              document.getElementById("data-span").innerText = parsedValue;
            }

            /* CHANGE THE CODE HERE */

            /* --------------- */
            /* --------------- */
            /* --------------- */
            /* --------------- */
            /* --------------- */
            /* --------------- */

            document.getElementById("term_window").value += value; // write the incoming string to the term_window textarea
          }

          // The last element in the lines array may be incomplete, so keep it in the buffer
          buffer = lines[lines.length - 1];
        }

        // If we've reached this point then we're closing the port
        // first step to closing the port was releasing the lock on the reader
        // we did this before exiting the read loop.
        // That should have broken the textDecoder pipe and propagated an error up the chain
        // which we catch when this promise resolves
        await readableStreamClosed.catch(() => {
          /* Ignore the error */
        });
        // Now that all of the locks are released and the decoder is shut down, we can close the port
        await port.close();

        // Set a bunch of variables and disable the appropriate DOM elements
        portOpen = false;
        document.getElementById("openclose_port").innerText = "Open";
        document.getElementById("term_input").disabled = true;
        document.getElementById("send").disabled = true;
        document.getElementById("change").disabled = true;
        document.getElementById("port_info").innerText = "Disconnected";

        console.log("port closed");

        // Resolve the promise that we returned earlier. This helps other functions know the port status
        resolve();
      })();
    });
  }

  return;
}

// Change settings that require a connection reset.
// Currently this only applies to the baud rate
async function changeSettings() {
  holdPort = port; // stash the current SerialPort object
  reader.cancel(); // force-close the current port
  console.log("changing setting...");
  console.log("waiting for port to close...");
  await portPromise; // wait for the port to be closed
  console.log("port closed, opening with new settings...");
  openClose(); // open the port again (it will grab the new settings while opening the port)
}

// Send a string over the serial port.
// This is easier than listening because we know when we're done sending
async function sendString() {
  let outString = document.getElementById("term_input").value; // get the string to send from the term_input textarea
  document.getElementById("term_input").value = ""; // clear the term_input textarea for the next user input

  // Get a text encoder, pipe it to the SerialPort object, and get a writer
  const textEncoder = new TextEncoderStream();
  const writableStreamClosed = textEncoder.readable.pipeTo(port.writable);
  const writer = textEncoder.writable.getWriter();

  // write the outString to the writer
  await writer.write(outString);
  // add the outgoing string to the term_window textarea on its own new line denoted by a ">"
  document.getElementById("term_window").value += "\n>" + outString + "\n";

  // close the writer since we're done sending for now
  writer.close();
  await writableStreamClosed;
}

// Clear the contents of the term_window textarea
function clearTerminal() {
  document.getElementById("term_window").value = "";
}

// This function in bound to "keydown" in the term_input textarea.
// It intercepts Enter keystrokes and calls the sendString function
function detectEnter(e) {
  var key = e.keyCode;

  // If the user has pressed enter
  if (key == 13) {
    e.preventDefault();
    sendString();
  }
  return;
}
