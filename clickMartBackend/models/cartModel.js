const mongoose = require("mongoose");

const cartSchema = mongoose.Schema({
  id: { type: String, required: true },
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
  userId: { type: String, required: true },
  cartCount: { type: Number, required: true },
});

const CartModel = mongoose.model("cart", cartSchema);

module.exports = { CartModel, cartSchema };
