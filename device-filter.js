const deviceFilter = device =>
    device.productId === 24866
    && device.vendorId === 7504
    && (device.interface === 0
        || (
        (device.usagePage === 128 && device.usage === 129)
        || (device.usagePage === 65280 && device.usage === 1)
        )
    )
;

module.exports.deviceFilter = deviceFilter;
