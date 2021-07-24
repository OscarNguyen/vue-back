const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')

const pageSchema = new mongoose.Schema({
  type:{
    type:String,
    required: true,
    unique:true
  },
  content: {
    type: String,
    required: true,
    minLength: 5,
  },
})
pageSchema.plugin(uniqueValidator)

module.exports = mongoose.model('Page', pageSchema)
