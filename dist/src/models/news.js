'use strict';

var mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');

var newsSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    unique: true
  },
  body: {
    type: String,
    required: true,
    minLength: 5
  }
});
newsSchema.plugin(uniqueValidator);

module.exports = mongoose.model('News', newsSchema);