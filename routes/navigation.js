var express = require('express');
var router = express.Router();
const hospitals = require('../models/hospital.model')
const trafficlights = require('../models/trafficlight.model')

/* GET navigation listing. */
router.get('/', function(req, res, next) {
  res.send('This root is to help you with navigation api');
});


/* GET list of hospitals. */
router.get('/hospitals', function(req, res, next) {
  
  const listhospitals = hospitals.getListHospitals()
  
  const jsonString = JSON.stringify(listhospitals)

  res.send (jsonString)
  //res.send('This is to get list of destinations');
});


/* GET light gps list. */
router.get('/trafficlight/GPS/:id', function(req, res, next) {
  const id = req.params.id 
  const trafficlight = trafficlights.getListTrafficLight(id)

  const jsonString = JSON.stringify(trafficlight)

  res.send (jsonString)
 // res.send('This is to get red light gps coordinates');
});


/* GET light status. */
router.get('/trafficlight/status/:id&:lightid', function(req, res, next) {
 const id = req.params.id 
 const lightid = req.params.lightid
 const trafficlight = trafficlights.getTrafficLightStatus(id,lightid)

 const jsonString = JSON.stringify(trafficlight)

 res.send (jsonString)
//  res.send('This is to get status of red light');
});

/* update light status. */
router.put('/trafficlight/Status/', function(req, res, next) {
 
 const id = req.body.id 
 const lightid = req.body.lightid
 const status = req.body.status
 //res.send( id + ' ' + lightid + ' ' + status)
 const trafficlight = trafficlights.updateTrafficLightStatus(id,lightid,status)
 
 const jsonString = JSON.stringify(trafficlight)

 res.send (jsonString)
 // res.send('This is to post status of red light');
});

module.exports = router;
