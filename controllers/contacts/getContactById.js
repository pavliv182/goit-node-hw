const { Contact } = require("../../models/contact");
const createError = require("../../helpers/createError");

const getContactById = async (req, res, next) => {
  const result = await Contact.findById(req.params.id);

  if (!result) {
    throw createError(404, "Not found");
  }
  res.status(200).json(result);
};

module.exports = getContactById;
