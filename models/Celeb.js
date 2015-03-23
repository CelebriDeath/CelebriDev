'use strict';

var mongoose = require('mongoose');

var celebSchema = new mongoose.Schema({
  moniker: String,
  category1: String,
  category2: String,
  category3: String,
  lastName: String,
  firstName: String,
  middleName: String,
  suffix: String,
  birth: String,
  death: String,
  age: String,
  bio: String,
  photoLink: String,
  burialCoords: String,
  burialAddy: String,
  burialCity: String,
  burialState: String,
  burialZIP: String,
  burialCountry: String,
  burialFacility: String,
  howDied: String
});

module.exports = mongoose.model('Celeb', celebSchema);
