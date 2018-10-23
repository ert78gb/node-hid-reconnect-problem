const HID = require('node-hid');
const logDevices = require("../log-devices").logDevices;
const deviceFilter = require('../device-filter').deviceFilter;

const devices = HID.devices();
logDevices(devices);

const deviceInfo = devices
    .find(deviceFilter);

console.debug('device info:', deviceInfo);

const device = new HID.HID(deviceInfo.path);
console.debug('opened device', device);
