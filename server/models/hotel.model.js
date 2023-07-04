const mongoose = require('mongoose');
const hotelSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
  image: {
    type: [String],
    required: true,
  },
});
const Hotel = mongoose.model('Hotel', hotelSchema);
module.exports = Hotel;
