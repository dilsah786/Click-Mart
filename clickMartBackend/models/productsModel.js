const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  title: { type: String, required: true },
  isNewProduct: { type: Boolean },
  ratings: { type: Number },
  oldPrice: { type: Number },
  price: { type: Number, required: true },
  description: { type: String },
  category: { type: String },
  image: { type: String, required: true },
  rating: { type: Number },
  brand: { type: String },
});

const ProductModel = mongoose.model("product", productSchema);

module.exports = { ProductModel, productSchema };
