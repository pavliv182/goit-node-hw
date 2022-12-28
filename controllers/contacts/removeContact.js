const { Contact } = require("../../models/contact");
const createError = require("../../helpers/createError");

const removeContact = async (req, res) => {
  const result = await Contact.findByIdAndRemove(req.params.id);
  if (!result) {
    throw createError(404, "Contact not found");
  }
  res.status(200).json({ message: "contact deleted" });
};

module.exports = removeContact;
