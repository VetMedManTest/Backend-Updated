const RFQ = require("../models/rfqModel");
const ErrorHandler = require("../utils/errorhandler");
const catchAsyncErrors = require("../middleware/catchAsyncError");

exports.createRFQ = catchAsyncErrors(async (req, res, next) => {
  const {
    description,
    qty,
    leadTime,
    responseDate,
    email,
    additionalInformation,
    phoneNumber,
    endUser,
    additional,
    address,
  } = req.body;

  if (
    !description ||
    !qty ||
    !leadTime ||
    !responseDate ||
    !email ||
    !phoneNumber ||
    !endUser ||
    !address
  ) {
    return next(new ErrorHandler("Missing required fields for RFQ", 400));
  }

  const newRFQ = new RFQ({
    description,
    qty,
    leadTime,
    responseDate,
    email,
    additionalInformation,
    phoneNumber,
    endUser,
    additional,
    address,
  });

  await newRFQ.save();

  res.status(200).json({
    success: true,
    message: "RFQ created successfully",
  });
});
