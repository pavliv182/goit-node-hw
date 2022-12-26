const Contact = require("../../models/contact");

const createError = require("../../helpers/createError");

const updateById = async (req, res, next) => {
  console.log("123123");
  const result = await Contact.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  if (!result) {
    throw createError(400, "missing fields");
  }
  res.json(result);
};

module.exports = updateById;
