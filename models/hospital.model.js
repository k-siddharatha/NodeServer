const filename = '../data/hospitals.json'
let hospitals = require(filename)
const helpfilename = './data/hospitals.json'
const helper = require('../helpers/helper.js')

function getListHospitals() {
    if (hospitals.length === 0) {
        return({
            message: 'No hospitals available',
            status: 201
        }) 
    }

    return hospitals
}

module.exports = {
    getListHospitals
}