const Contact = require("../../models/contact");

const getAll = async (req, res, next) => {
  const result = await Contact.find({}, "-createdAt -updatedAt");
  res.status(200).json(result);
};

// const getAll = async (req, res, next) => {
//   const result = await contacts.listContacts();

//   res.status(200).json(result);
// };

module.exports = getAll;
