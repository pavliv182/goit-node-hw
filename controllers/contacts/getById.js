const Contact = require("../../models/contact");
const createError = require("../../helpers/createError");

const getById = async (req, res, next) => {
  const result = await Contact.findById(req.params.id);
  console.log(res);
  if (!result) {
    throw createError(404, "Not found");
  }
  res.status(200).json(result);
};

module.exports = getById;

// const getById = async (req, res, next) => {
//   const result = await contacts.getContactById(req.params.contactId);
//   if (!result) {
//     throw createError(404, "Not found");
//   }

//   res.status(200).json(result);
// };
