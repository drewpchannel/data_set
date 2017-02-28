var express = require('express');
var router = express.Router();

var dataSet1 = {
  id: "1",
  owner: "alberto",
  name: "temp data set"
}
var dataSet2 = {
  id: "2",
  owner: "godinez",
  name: "temp data set number 2"
}
var dataSets = [dataSet1, dataSet2];

// define the login page route
router.get('/', function (req, res) {
  res.send(dataSets)
})

module.exports = router