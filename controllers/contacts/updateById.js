const Contact = require("../../models/contact");
const { contactSchema } = require("../../schemas/contactSchema");
const createError = require("../../helpers/createError");

const updateById = async (req, res, next) => {
  const { error } = contactSchema.validate(req.body);
  if (error) {
    throw createError(400, "missing fields");
  }
  const result = await Contact.findByIdAndUpdate(
    req.params.contactId,
    req.body,
    {
      new: true,
    }
  );

  if (!result) {
    throw createError(404, "Not found");
  }

  res.json(result);
};

module.exports = updateById;

// const updateById = async (req, res, next) => {
//   const result = await contacts.updateContact(req.params.contactId, req.body);

//   if (!result) {
//     throw createError(404, "Not found");
//   }

//   res.json(result);
// };
