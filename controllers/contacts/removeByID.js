const Contact = require("../../models/contact");
const createError = require("../../helpers/createError");

const removeById = async (req, res, next) => {
  const result = await Contact.findByIdAndRemove(req.params.contactId);
  if (!result) {
    throw createError(404, "Contact not found");
  }
  res.status(200).json({ message: "contact deleted" });
};

module.exports = removeById;
