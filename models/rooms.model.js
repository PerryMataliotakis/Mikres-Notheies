const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const Schema = mongoose.Schema;

let roomsSchema = new Schema({
  roomNumber: {
    type: String,
    required: [true, 'Room number is a required field'],
    max: 100,
    unique: true,
    trim: true,
    lowercase: true
  },
  beds: {
    type: Number,
    required: [true, 'Number of beds is a required field'],
    min: [0, 'Number of beds should be greater than or equal to 0']
  },
  price: {
    type: Number,
    required: [true, 'Price is a required field'],
    min: [0, 'Price should be greater than or equal to 0']
  }
}, {
  collection: 'rooms',
  timestamps: true
});

roomsSchema.plugin(uniqueValidator);

module.exports = mongoose.model('Room', roomsSchema);