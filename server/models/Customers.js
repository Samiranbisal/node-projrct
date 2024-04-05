const mongoose = require("mongoose");
const schema = mongoose.Schema;

const customerSchema = new schema(
  {
    FirstName: {
      type: String,
      required: true,
    },
    LastName: {
      type: String,
      required: true,
    },
    Phone_No: {
      type: String,
      required: true,
      unique: true,
    },
    Email: {
      type: String,
      required: true,
      unique: true,
    },
    CreatedAt: {
      type: Date,
      //   default: Date.now(),
    },
    UpdatedAt: {
      type: Date,
      //   default: Date.now(),
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Customer", customerSchema);
