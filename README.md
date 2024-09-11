# IoT

## Launch Application
- Connect Arduino
- Go to terminal and check what com port is used
- type in this in terminal ``ls /dev/{tty,cu}.*``
- Paste the com port in ``var port = new SerialPort(' paste in here ',{ ``
- should look something like this ``/dev/tty.usbmodem101``
- Using Arduino Create upload the sketch to your Arduino.
- ``npm install``
- Using the Terminal start your Node.js app using node app.js.
- ``node app.js``
- Open up a browser and enter the URL http://localhost:3000/.
- Full tutorial URL: https://codeadam.ca/learning/arduino-to-nodejs.html

## Agenda
- Intro to what microcontrollers is
- What they can be used for
- How to use it
- Some code examples

## Parts List

### Starter Kit Components
- **Arduino Uno**
- **USB-B Cable**

### Playknowlogy Large Kit Modules
1. RGB LED Module
2. Light Dependent Resistor (LDR) Module
3. Linear Magnetic Hall Sensor
4. Reed Switch Module
5. Digital Temperature Sensor
6. Small Microphone Module
7. Large Microphone Module
8. Hit Sensor Module
9. Hall Effect Sensor
10. Button Switch Module
11. Temperature and Humidity Module
12. Vibration Shock Module
13. Magnetic Hall Sensor
14. Potentiometer Module
15. Light Barrier Module
16. Tilt Switch
17. Flame Sensor Module
18. Touch Sensor
19. Joystick Module
20. 5V Relay Module
21. Obstacle Avoidance Sensor
22. 5mm IR LED
23. IR Receiver Module
24. RGB SMD Module
25. Line Tracking Module
26. Active Buzzer Module
27. Mini Reed Switch Module
28. Laser Module
29. TCS 3200 Color Sensor
30. Bi-color LED Module (3mm)
31. RGB Flash Module
32. DS18B20 Temperature Sensor
33. Passive Buzzer
34. Bi-color LED Module (5mm)
35. Dual Ultrasonic Sensor Module
36. Analog Temperature Sensor
37. Pulse Generator
38. Light-Seeking Sensors (x2)

### Additional Components
- Wires
- PIR Sensor
- 1m RGB LED Strip

## Getting Started

1. **Assemble the Arduino Uno**: Connect the Arduino Uno to your computer using the USB-B cable.
2. **Connect Modules**: Use the provided wires to connect various sensors and modules from the Playknowlogy kit to the Arduino Uno.
3. **Write Code**: Program the Arduino Uno to interact with the connected modules. Sample code can be found in the `examples` directory.
4. **Test Your Setup**: Use the Serial Monitor in the Arduino IDE to test the functionality of each module.

## Referances
- https://github.com/codeadamca/arduino-from-nodejs
- https://github.com/codeadamca/arduino-to-nodejs
