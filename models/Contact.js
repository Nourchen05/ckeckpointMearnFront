//require mongoose

const mongoose = require("mongoose");

//constact schema
const schema = mongoose.Schema;

//const {Schema}=mongoose

const contactSchema = new schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  phone: Number,
});

module.exports = Contact = mongoose.model("contact", contactSchema);
