const RFQ = require("../models/rfqModel");
const ErrorHandler = require("../utils/errorhandler");
const catchAsyncErrors = require("../middleware/catchAsyncError");

exports.createRFQ = catchAsyncErrors(async (req, res, next) => {
  const {
    productID,
    uom,
    cc,
    description,
    companyName,
    email,
    quantity,
    leadTime,
    responseByDate,
    comments,
  } = req.body;

  if (
    !productID ||
    !uom ||
    !cc ||
    !description ||
    !companyName ||
    !email ||
    !quantity ||
    !leadTime ||
    !responseByDate
  ) {
    return next(new ErrorHandler("Missing required fields for RFQ", 400));
  }

  const newRFQ = new RFQ({
    productID,
    uom,
    cc,
    description,
    companyName,
    email,
    quantity,
    leadTime,
    responseByDate,
    comments,
  });

  await newRFQ.save();

  res.status(200).json({
    success: true,
    message: "RFQ created successfully",
  });
});
