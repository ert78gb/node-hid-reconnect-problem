const logDevices = devices => {
    for (const logDevice of devices) {
        console.debug(JSON.stringify(logDevice));
    }
};

module.exports.logDevices = logDevices;
