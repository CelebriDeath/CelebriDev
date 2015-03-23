'use strict';

var express = require('express');
var http = require('http');
var mongoose = require('mongoose');
var celebsRoutes = require('./routes/celebs-routes');

mongoose.connect(process.env.MONGOLAB_URI || 'mongodb://localhost/db-cel');

var app = express();
app.use(express.static(__dirname + '/build'));

var router = express.Router();

celebsRoutes(router);

app.use('/api/v1', router);

http.createServer(app).listen(process.env.PORT || 3000, function() {
  console.log('The server is listening on port ' + (process.env.PORT || 3000));
});
