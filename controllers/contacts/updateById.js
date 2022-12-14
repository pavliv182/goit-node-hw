const contacts = require("../../models/contacts");
const createError = require("../../helpers/createError");

const updateById = async (req, res, next) => {
  const result = await contacts.updateContact(req.params.contactId, req.body);

  if (!result) {
    throw createError(404, "Not found");
  }

  res.json(result);
};

module.exports = updateById;
