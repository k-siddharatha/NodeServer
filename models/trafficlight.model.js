const filename = '../data/trafficlight.json'
let trafficlights = require(filename)
const helpfilename = './data/trafficlight.json'
const helper = require('../helpers/helper.js')

function getListTrafficLight(id) {
    if (trafficlights.length === 0) {
        return({
            message: 'No traffic lights available',
            status: 201
        }) 
    
    }
    const light = trafficlights.find(r => r.id == id)
    if (!light) {
        return({
            message: 'traffic light id is not available',
            status: 404
        })
    }
    return light
}

function getTrafficLightStatus(id, lightid) {
    if (trafficlights.length === 0) {
        return({
            message: 'No traffic lights available',
            status: 201
        }) 
    
    }
    const trafficlightlist = trafficlights.find(r => r.id == id)
    if (!trafficlightlist) {
        return({
            message: 'traffic id is not available',
            status: 404
        })
    }
    const trafficlight = trafficlightlist.light.find(m => m.tlid == lightid)
    if (!trafficlight) {
        return({
            message: 'traffic light id is not available',
            status: 404
        })
    }
    return trafficlight
}


function updateTrafficLightStatus(id, lightid,status) {
    if (trafficlights.length === 0) {
        return({
            message: 'No traffic lights available',
            status: 201
        }) 
    
    }

    const trafficlightlist = trafficlights.find(r => r.id == id)
    if (!trafficlightlist) {
        return({
            message: 'traffic id is not available',
            status: 404
        })
    }
    const trafficlight = trafficlightlist.light.find(m => m.tlid == lightid)
    if (!trafficlight) {
        return({
            message: 'traffic light id is not available',
            status: 404
        })
    }
    var i = 0
    var j = 0
    for (var dataIndex in trafficlights) {
        for ( var lightdataindex in trafficlights[dataIndex].light) {
            if (trafficlights[dataIndex].id === id && trafficlights[dataIndex].light[lightdataindex].tlid == lightid) {
                trafficlights[dataIndex].light[lightdataindex].status = status
                i = dataIndex
                j = lightdataindex
            }
        }
    }
    helper.writeJSONFile(helpfilename, trafficlights)
    return  trafficlights[i]
}


module.exports = {
    getListTrafficLight,
    getTrafficLightStatus,
    updateTrafficLightStatus
}