const mongoose = require("mongoose");

const mealsSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  description: { type: String, required: true },
});

const Meals = mongoose.model("Meals", mealsSchema);

module.exports = Meals;
