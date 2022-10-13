const mongoose = require("mongoose");

const itemsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  deadline_time: {
    type: String,
    default: ""
  },
  deadline_date: {
    type: String,
    default: ""
  },
});

module.exports = mongoose.model("Item", itemsSchema);
