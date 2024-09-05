const express = require("express");
const cors = require("cors");
const { connection } = require("./db");
const { userController } = require("./Controllers/user.routes");
const { productController } = require("./Controllers/products.routes");
const { authentication } = require("./Middlewares/authentication");
const { cartController } = require("./Controllers/cart.routes");
const { wishlistController } = require("./Controllers/wishlist.routes");
const { addressController } = require("./Controllers/address.routes");
const app = express();


app.use(express.json());
app.use(cors());
require("dotenv").config()

app.get("/", async (req, res) => {
  res.json({ message: "Hello I am api for ecommerce!" });
});

app.use("/user",userController)

app.use(authentication)     // Middleware for authentication

app.use("/products",productController)
app.use("/products/cart",cartController)
app.use("/products/wishlist",wishlistController)
app.use("/user/address",addressController)


// app running and connection to mongoDB methos is here

app.listen(process.env.PORT || 8080, async () => {
  try {
    await connection;
    console.log("I am connected to mongoDB database");
  } catch (error) {
    console.log(error);
  }
  console.log("I am running on port 8080");
});
