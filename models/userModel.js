const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
      trim: true,
    },
    email: {
      type: String,
      require: true,
      trim: true,
      unique: true,
    },
    mobile: {
      type: String,
      require: true,
      trim: true,
    },
    suite: {
      type: String,
      trim: true,
    },
    address: {
      type: String,
      require: true,
      trim: true,
    },
    zip: {
      type: String,
      require: true,
      trim: true,
    },
    city: {
      type: String,
      require: true,
      trim: true,
    },
    state: {
      type: String,
      require: true,
      trim: true,
    },
    security: {
      type: String,
      require: true,
      trim: true,
    },
    work: {
      type: String,
      require: true,
      trim: true,
    },
    about: {
      type: String,
      require: true,
      trim: true,
    },
    nid: {
      type: Array,
      require: true,
      trim: true,
    },
    password: {
      type: String,
      require: true,
    },
    role: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);
