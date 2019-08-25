const filename = '../data/devices.json'
let devices = require(filename)
const helpfilename = './data/devices.json'
const helper = require('../helpers/helper.js')

function getDevice(email,password) {
    if (devices.length === 0) {
        return({
            message: 'No device available',
            status: 201
        }) 
    }
    const row = devices.find(r => r.email == email)
    if (!row) {
        return({
            message: 'email is not good',
            status: 404
        })
    }
    if ( row.password != password) {
        return({
            message: 'credentials not good',
            status: 404
        })
    }

    return({
        message: 'device is good',
        devicename: row.deviceName,
        businessname: row.businessName,
        status: 200
    }) 
}

function createDevice(newDevice) {
    const id = { id: helper.getNewId(devices) }
        const date = { 
            createdAt: helper.newDate(),
            updatedAt: helper.newDate()
        } 
        newDevice = { ...id, ...newDevice, ...date }
        devices.push(newDevice)
        helper.writeJSONFile(helpfilename, devices)
        return newDevice;
}


module.exports = {
    getDevice,
    createDevice
}