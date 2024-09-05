const express = require("express");
const { ProductModel } = require("../models/productsModel");
const { AddressModel } = require("../models/addressModel");
const { CartModel } = require("../models/cartModel");

const cartController = express.Router();

// Getting items from the carts

cartController.get("/all_cart_items", async (req, res) => {
  const { userId } = req.body;
  try {
    const all_cart_items = await CartModel.find({ userId });
    return res.json({ message: "success", items: all_cart_items });
  } catch (err) {
    console.log(err);
  }
});

// Adding items to the cart

cartController.post("/add_item_in_cart", async (req, res) => {
  const { id, userId } = req.body;

  let cartCount = 0;
  const singleItem = await ProductModel.findOne({ _id: id });
  const {
    _id,
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

  const existingItemInCart = await CartModel.findOne({ id: id, userId });

  if (existingItemInCart) {
    return res.json({ message: "Item already  exist in cart" });
  }

  try {
    cartCount++;
    const newItemInCart = await CartModel.create({
      id: id,
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
      cartCount,
    });

    res.json({ itemIs: newItemInCart });
  } catch (err) {
    console.log(err);
  }
});

//  Updaing items in the cart

cartController.patch("/update_item_in_cart", async (req, res) => {
  const { id, count, userId } = req.body;
  console.log(id);

  const singleItem = await CartModel.findOne({ id: id, userId: userId });
  console.log(singleItem);
  let { cartCount } = singleItem;

  try {
    cartCount += count;
    const newItemInCart = await CartModel.findOneAndUpdate(
      { id, userId },
      { cartCount },
      { new: true }
    );

    res.json({ itemIs: newItemInCart });
  } catch (err) {
    console.log(err);
  }
});

// Deleting items form carts

cartController.delete("/delete_item_in_cart", async (req, res) => {
  const { id, userId } = req.body;
  if (!id) {
    return re.json({ message: "Please select a new item" });
  }

  const singleItem = await CartModel.findOne({ id: id, userId: userId });
  if (!singleItem) {
    return res.json({ message: "No such item exists in cart" });
  }
  const { title } = singleItem;

  try {
    const newItemInCart = await CartModel.findOneAndDelete({ id, userId });

    res.json({
      status: "Success",
      message: `${title} has removed from your cart list`,
    });
  } catch (err) {
    console.log(err);
  }
});

module.exports = { cartController };
