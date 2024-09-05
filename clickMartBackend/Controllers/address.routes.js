const express = require("express");
const { AddressModel } = require("../models/addressModel");

const addressController = express.Router();


//  Getting all addresses from the database by user Specific

addressController.get("/all_addresses", async (req, res) => {
  const { userId } = req.body;

  try {
    const addresses = await AddressModel.find({ userId });
    return res.json({message:"Here is all your addresses", addresses });
  } catch (err) {
    console.log(err);
  }
});


// Adding a new address to the database by user Specific

addressController.post("/add_new_address", async (req, res) => {
  const {
    name,
    mobile,
    pincode,
    locality,
    address,
    city,
    state,
    alternateMobile,
    landmark,
    userId,
  } = req.body;

  try {
    const newAddress = await AddressModel.create({
      name,
      mobile,
      pincode,
      locality,
      address,
      city,
      state,
      alternateMobile,
      landmark,
      userId,
    });

    return res.json({
      message: "New Address added successfully",
      address: newAddress,
    });
  } catch (err) {
    console.log(err);
  }
});


// Updating addresses in the database by user Specific 

addressController.patch("/update_address", async (req, res) => {
  const {
    _id,
    name,
    mobile,
    pincode,
    locality,
    address,
    city,
    state,
    alternateMobile,
    landmark,
    userId,
  } = req.body;

  try {
    const updatedAddress = await AddressModel.findOneAndUpdate(
      { _id, userId },
      { _id,
        name,
        mobile,
        pincode,
        locality,
        address,
        city,
        state,
        alternateMobile,
        landmark,
        userId,
      },
      {new:true}
    );

    return res.json({
      message: "Address Updated successfully",
      address: updatedAddress,
    });
  } catch (err) {
    console.log(err);
  }
});



// Deleting addresses from database by user Specific

addressController.delete("/delete_address",async(req,res)=>{
    const {userId,_id} = req.body;
    try {
        const deletedAddress = await AddressModel.findOneAndDelete({_id,userId});
        res.json({message:"Address deleted successfully",address:deletedAddress})
    } catch (err) {
        console.log(err);
    }
})




module.exports = { addressController };
