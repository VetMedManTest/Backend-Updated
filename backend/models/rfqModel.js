const mongoose = require("mongoose");

const rfqSchema = new mongoose.Schema({
  productID: String,
  uom: String,
  cc: String,
  description: String,
  companyName: String,
  email: String,
  quantity: Number,
  leadTime: String,
  responseByDate: Date,
  comments: String,
});

module.exports = mongoose.model("RFQ", rfqSchema);
