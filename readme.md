# node-hid reconnect/devices list problem

This repository contains a reproduction code of node-hid not show previous connected device if change node version.

## Our use case
The [Agent](https://github.com/UltimateHackingKeyboard/agent) application uses [node-hid](https://github.com/node-hid/node-hid/) to communicate with a keyboard.
The keyboard contains more interface. The communication interface is 0,
When Agent is updating to the new version it deploys the new version of node-hid 0.7.0 (old version 0.6.0) then node-hid does not show the 0 interface until the keyboard is not unplugged and plugged again to the computer.

## Reproduction
1. clone the repository
2. use node 8.12.0 version
3. change directory to the `new` directory and run `npm ci`
4. change directory to the `old` directory and run `npm ci`
5. Please set the correct `productId` and `vendorId` in the condition in the `./device-filter.js` file. Change the `usagePage` and `usage` if need.
6. change to the `new` directory and run `node index.js` 
7. change to the `old` directory and run `node index.js` 
8. change to the `new` directory and run `node index.js` 

Between the step 6 and 7 the device will not available
