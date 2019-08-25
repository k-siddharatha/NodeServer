var express = require('express');
var router = express.Router();
const device = require('../models/device.model')
const m = require('../helpers/middlewares')

/* GET register listing. */
router.get('/', function(req, res, next) {
  res.send('got get on register');
});

/* GET register listing. */
router.post('/', m.checkFieldsDevice, function(req, res, next) {
  var jsonResponse = device.createDevice(req.body)
  res.status(201).send(jsonResponse);
});
module.exports = router;
