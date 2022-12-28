const { Contact } = require("../../models/contact");
const createError = require("../../helpers/createError");

const updateStatusContact = async (req, res, next) => {
  const result = await Contact.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  if (!result) {
    throw createError(400, "missing field favorite");
  }
  if (result) {
    res.status(200).json(result);
  }
  res.status(404).json({ message: "Not found" });
};

module.exports = updateStatusContact;
