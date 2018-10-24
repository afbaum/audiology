const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const IoihaSchema = new Schema({
  make: {
    type:String,
    required: true},
  style: {
    type: String,
    required: true},
  model: {
    type: String,
    required: true},
  score: {
    type: Number,
    required: true},
  verification: {
    type: Boolean},
  prescriptiveFormula: {
    type: String
  }
});

module.exports = Ioiha = mongoose.model('ioiha', IoihaSchema);
