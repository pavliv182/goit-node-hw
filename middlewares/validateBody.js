const { createError } = require("../helpers/createError");

const validateBody = (schema) => {
  const func = (req, res, next) => {
    console.log(schema);
    const { error } = schema.validate(req.body);
    if (error) {
      next(createError(400, "missing required name field"));
    }
    next();
  };

  return func;
};

module.exports = validateBody;
