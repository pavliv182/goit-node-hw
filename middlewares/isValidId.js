// const { isValidObjectId } = require("mongoose");

// const { createError } = require("../helpers");

// const isValidId = (req, res, next) => {
//   console.log(req.params);
//   const { id } = req.params.id;
//   console.log(isValidObjectId(id));
//   if (!isValidObjectId(id)) {
//     next(createError(404, "Invalid Id"));
//   }
//   next();
// };

// module.exports = isValidId;
