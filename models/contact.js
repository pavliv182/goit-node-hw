const { Schema, model } = require("mongoose");

const oneContactSchema = Schema({
  name: {
    type: String,
    required: [true, "Set a name for a contact"],
  },
  email: {
    type: String,
  },
  phone: {
    type: String,
  },
});

const Contact = model("contact", oneContactSchema);

module.exports = Contact;
