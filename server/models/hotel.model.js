const mongoose = require("mongoose");
const hotelSchema = new mongoose.Schema({
  name: String,
  city: String,
  location: String,
  description: String,
  price: Number,
  rating: Number,
  images: [String],
});
const Hotel = mongoose.model("Hotel", hotelSchema);
module.exports = Hotel;
