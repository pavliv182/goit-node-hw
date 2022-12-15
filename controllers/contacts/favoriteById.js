const Contact = require("../../models/contact");
const updateFavoriteContactSchema = require("../../schemas/updateFavoriteContactSchema");
const createError = require("../../helpers/createError");

const favoriteById = async (req, res, next) => {
  const { error } = updateFavoriteContactSchema.validate(req.body);
  if (error) {
    throw createError(400, "missing fields");
  }
  const result = await Contact.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  if (!result) {
    throw createError(404, "Not found");
  }

  res.json(result);
};

module.exports = favoriteById;
