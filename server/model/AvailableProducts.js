const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: false,
  },
  description: {
    type: String,
    required: true,
    unique: false,
  },
  price: {
    type: String,
    required: true,
    unique: false,
  },
  fileName: String,
  filePath: String,
});

const Product = mongoose.model("products", productSchema);

module.exports = Product;
