var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var temp = [];
var messages = [];

app.use(bodyParser.json());

app.post('/', function( req, res) {

  messages.push(req.body.message);

   res.status(200).set({
   'Content-Type': 'application/json',
   'Access-Control-Allow-Origin': '*',
   'Access-Control-Allow-Methods': 'OPTIONS, GET, POST',
   'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
   'X-XSS-Protection': '1; mode=block',
   'X-Frame-Options': 'SAMEORIGIN',
   'Content-Security-Policy': "default-src 'self' devmountain.github.io"
 }).send(JSON.stringify(messages));

});



app.get('/', function( req, res ) {
  res.status(200).set({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'OPTIONS, GET, POST',
    'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
    'X-XSS-Protection': '1; mode=block',
    'X-Frame-Options': 'SAMEORIGIN',
    'Content-Security-Policy': "default-src 'self' devmountain.github.io"
  }).send(JSON.stringify(messages));

});

app.options('/', function( req, res ) {
  res.status(200).set({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'OPTIONS, GET, POST',
    'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
    'X-XSS-Protection': '1; mode=block',
    'X-Frame-Options': 'SAMEORIGIN',
    'Content-Security-Policy': "default-src 'self' devmountain.github.io"
  }).send();

});

app.listen(3000, function(){
  console.log('listening on port 3000');
});
