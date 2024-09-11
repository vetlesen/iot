# IoT 
https://en.wikipedia.org/wiki/Internet_of_things

## Start
- Download VS code https://code.visualstudio.com/
- Download the extension inside VS code extension id ``ritwickdey.LiveServer``
- Download Arduino IDE https://www.arduino.cc/en/software
- Download this code repo ``green button with code``and ``download zip``

## Launch Application
- Connect Arduino
- Load arduino code to arduino ``filename.ino``
- Open repo in vs code
- Start live server
- Open server ``localhost:xxxx``

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

## S/O

This is a simple demo of the [Web Serial API](https://web.dev/serial/) which implements a bare-bones serial terminal.

This demo uses TextEncoderStream and TextDecoderStream to encode/decode the serial stream, so it only deals in strings and not raw bytes.
Please see the comments in script.js for more detail on how the Web Serial API is being utilized. 

You can play with the live demo here:

https://sparkfunx.github.io/WebTerminalDemo/

It also accepts a query string to prefill the outgoing text box, like this:

https://sparkfunx.github.io/WebTerminalDemo/?prefill=This%20is%20prefilled%20text

Distributed as-is; no warranty is given.


## Referances
- https://github.com/codeadamca/arduino-from-nodejs
- https://github.com/codeadamca/arduino-to-nodejs
- https://github.com/sparkfunX/WebTerminalDemo
