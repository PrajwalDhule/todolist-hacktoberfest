const mongoose = require("mongoose");

const itemsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  deadline: {
    type: String,
    default: ""
  },
});

module.exports = mongoose.model("Item", itemsSchema);
