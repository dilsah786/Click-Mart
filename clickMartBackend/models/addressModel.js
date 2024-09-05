const mongoose = require("mongoose");

const addressSchema = mongoose.Schema({
  name: { type: String, required: true },
  mobile: { type: String, required: true },
  pincode: { type: String, required: true },
  locality: { type: String, required: true },
  address: { type: String, required: true },
  state: { type: String, required: true },
  alternateMobile: { type: String },
  landmark: { type: String },
  userId: { type: String, required: true },
});

const AddressModel = mongoose.model("address", addressSchema);

module.exports = { AddressModel, addressSchema };
