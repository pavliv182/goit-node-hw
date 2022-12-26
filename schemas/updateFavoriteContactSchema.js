const Joi = require("joi");

const updateFavoriteContactSchema = Joi.object({
  favorite: Joi.boolean().required(),
});

module.exports = updateFavoriteContactSchema;
