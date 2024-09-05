const mongoose = require("mongoose");

const wishlistSchema = mongoose.Schema({
  id: { type: String,required:true },
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
  wishList:{type:Boolean,required:true,default:false}
});

const WishlistModel = mongoose.model("wishList", wishlistSchema);

module.exports = { WishlistModel, wishlistSchema };
