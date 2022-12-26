const Contact = require("../../models/contact");
// const { contactSchema } = require("../../schemas/contactSchema");
// const { createError } = require("../../helpers");

const add = async (req, res, next) => {
  // const { error } = contactSchema.validate(req.body);
  // if (error) {
  //   throw createError(400, error.message);
  // }

  const result = await Contact.create(req.body);

  res.status(201).json(result);
};

module.exports = add;

// const add = async (req, res, next) => {
//   const result = await contacts.addContact(req.body);

//   res.status(201).json(result);
// };
