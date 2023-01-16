const { Contact } = require("../../models/contact");
// const { contactSchema } = require("../../schemas/contactSchema");
const { createError } = require("../../helpers");

const addContact = async (req, res) => {
  const { _id: owner } = req.user;
  const result = await Contact.create({ ...req.body, owner });
  if (!result) {
    throw createError(400, "missing required name field");
  }
  res.status(201).json(result);
};

module.exports = addContact;
