const express = require("express");
const {ProductModel} = require("../models/productsModel")
const productController = express.Router();



// Grtting items from products

productController.get("/", async (req, res) => {
  let products = [];

  const { sortBy, order, page, limit, category, brand, title, q } = req.query;
  const skipDataForPagination = (page - 1) * limit;
  const searchQuerry = q;

  // Search functionality starts here

  try {
    if (searchQuerry) {
      const regex = new RegExp(searchQuerry, "i");
      products = await ProductModel.find({
        $or: [
          { title: regex },
          { brand: regex },
          { description: regex },
          { category: regex },
        ],
      });
      return res.json({ status: "Here is your Search", data: products });
    }

    
  // Search functionality ends here


  
  // Pagination functionality starts here
    if (page && limit && order && sortBy) {
      if (order === "asc") {
        products = await ProductModel.find()
          .skip(skipDataForPagination)
          .limit(limit)
          .sort({ [sortBy]: 1 });
        console.log(products + " combo");

        return res.json({ status: "success combo", data: products });
      } else if (order === "desc") {
        products = await ProductModel.find()
          .skip(skipDataForPagination)
          .limit(limit)
          .sort({ [sortBy]: -1 });
        return res.json({ status: "success combo", data: products });
      }
    } else if (category && order && sortBy) {
      if (order === "asc") {
        products = await ProductModel.find({ category: category }).sort({
          [sortBy]: 1,
        });
        return res.json({ status: "success", data: products });
      } else if (order === "desc") {
        products = await ProductModel.find({ category: category }).sort({
          [sortBy]: -1,
        });
        return res.json({ status: "success", data: products });
      }
    } else if (title && order && sortBy) {
      if (order === "asc") {
        products = await ProductModel.find({ title: title }).sort({
          [sortBy]: 1,
        });
        return res.json({ status: "success", data: products });
      } else if (order === "desc") {
        products = await ProductModel.find({ title: title }).sort({
          [sortBy]: -1,
        });
        return res.json({ status: "success", data: products });
      }
    } else if (brand && order && sortBy) {
      if (order === "asc") {
        products = await ProductModel.find({ brand: brand }).sort({
          [sortBy]: 1,
        });
        return res.json({ status: "success", data: products });
      } else if (order === "desc") {
        products = await ProductModel.find({ brand: brand }).sort({
          [sortBy]: -1,
        });
        return res.json({ status: "success", data: products });
      }
    } else if (page && limit) {
      products = await ProductModel.find()
        .skip(skipDataForPagination)
        .limit(limit);
      return res.json({ status: "success combo", data: products });
    }

    
  // Pagination functionality ends here

    if (sortBy === "price" && order === "asc") {
      products = await ProductModel.find().sort({ price: 1 });
      return res.json({ products });
    } else if (sortBy === "price" && order === "desc") {
      products = await ProductModel.find().sort({ price: -1 });
      return res.json({ products });
    } else if (category) {
      products = await ProductModel.find({ category: category });
      return res.json({ status: "All products are here", data: products });
    } else if (brand) {
      products = await ProductModel.find({ brand: brand });
      return res.json({ status: "All products are here", data: products });
    } else if (title) {
      products = await ProductModel.find({ title: title });
      return res.json({ status: "All products are here", data: products });
    } else {
      products = await ProductModel.find();
      return res.json({ status: "All products are here", data: products });
    }
  } catch (error) {
    console.log(error);
  }
});


// Getting items by ID

productController.get("/:id", async (req, res) => {
  let id = req.params.id;

  try {
    const data = await ProductModel.findOne({ _id: id });
    if (!data) {
      return res.json({ message: "Item not found" });
    }
    console.log(data);
    res.json({ message: "I am getting single product information", data });
  } catch (err) {
    console.log(err);
  }
});

module.exports = { productController };
