var mqtt = require('mqtt')
var express = require('express')
var app = express()
const http = require('http')

var options = {
  port: 1883,
  clientId: 'mqttjs_' + Math.random().toString(16).substr(2, 8)
};
var client = mqtt.connect('mqtt://test.mosquitto.org', options);

app.get('/on', function (req, res) {
 client.publish('light', 'on')
});
app.get('/off', function (req, res) {
    client.publish('light', 'off')
   });
app.listen(3000);