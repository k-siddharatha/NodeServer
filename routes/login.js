var express = require('express');
var router = express.Router();
const device = require('../models/device.model')

/* GET login device details. */
router.get('/', function(req, res, next) {
  res.send('you should get login device details');
});


/* GET login device details. */
router.get('/:email&:password', function(req, res, next) {
  
  const email = req.params.email 
  const password = req.params.password 
  const chkDevice = device.getDevice(email,password)
  
  const jsonString = JSON.stringify(chkDevice)

  //res.send(email + ' ' + password + '  ' + jsonString);
  res.send (chkDevice)
})

/* post login device details. */
router.post('/', function(req, res, next) {
  res.send('got post on login');
});


module.exports = router;
