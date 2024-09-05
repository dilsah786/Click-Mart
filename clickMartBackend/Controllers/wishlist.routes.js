const express = require("express");
const { ProductModel } = require("../models/productsModel");
const { WishlistModel } = require("../models/wishlistModel");

const wishlistController = express.Router();


wishlistController.get("/all_wishlists_items",async(req,res)=>{
    const {userId} = req.body;
    try {
        const wishListItems = await WishlistModel.find({userId});
        res.json({ststus:"success",})
    } catch (err) {
        console.log(err);
    }
})













wishlistController.post("/add_item_in_wishlist", async (req, res) => {
  const { id, userId ,wishList} = req.body;

 
  const singleItem = await ProductModel.findOne({ _id: id });
  const {
    title,
    isNewProduct,
    oldPrice,
    price,
    description,
    category,
    image,
    rating,
    brand,
  } = singleItem;

  try {

    const newItemInWishlist = await WishlistModel.create({
      id,
      title,
      isNewProduct,
      oldPrice,
      price,
      description,
      category,
      image,
      rating,
      brand,
      userId,
      wishList,
    });

    res.json({ itemIs: newItemInWishlist });
  } catch (err) {
    console.log(err);
  }
});



wishlistController.delete("/delete_item_in_wishlist", async (req, res) => {
    const { id, userId } = req.body;
    if(!id){
        return re.json({message:"Please select a new item"})
    }
  
    const singleItem = await WishlistModel.findOne({ id: id, userId: userId });
    if(!singleItem){
      return res.json({message:"No such item exists in wishList"})
    }
    const {title} = singleItem;
  
    try {
      const newItemInWishlist = await WishlistModel.findOneAndDelete(
        { id, userId },
      );
      res.json({status:"Success",message:`${title} has removed from your wish list`,});
    } catch (err) {
      console.log(err);
    }
  });
  










module.exports = { wishlistController };
