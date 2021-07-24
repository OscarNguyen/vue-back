const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')

const newsSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    unique: true,
  },
  body: {
    type: String,
    required: true,
    minLength: 5,
  },
})
newsSchema.plugin(uniqueValidator)

module.exports = mongoose.model('News', newsSchema)
