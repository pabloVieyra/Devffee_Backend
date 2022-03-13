const mongoose = require("mongoose");
const { Schema } = mongoose;

const coffeeSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  imageUrl: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
    trim: true,
  },
  ingredients: [String],
  price: {
    type: Number,
    required: true,
    trim: true,
  },
});

const Coffee = mongoose.model("Coffee", coffeeSchema);

module.exports = Coffee;
