const express = require("express");
const router = express.Router();
const ctrl = require("../../controllers/contacts");

const { ctrlWrapper } = require("../../helpers");
const { validateBody, authenticate } = require("../../middlewares");

const { schemas } = require("../../models/contact");

router.get("/", authenticate, ctrlWrapper(ctrl.listContacts));

router.get("/:id", authenticate, ctrlWrapper(ctrl.getContactById));

router.post(
  "/",
  authenticate,
  validateBody(schemas.addContactSchema),
  ctrlWrapper(ctrl.addContact)
);

router.put(
  "/:id",
  authenticate,
  validateBody(schemas.updateContactSchema),
  ctrlWrapper(ctrl.updateContact)
);

router.delete("/:id", authenticate, ctrlWrapper(ctrl.removeContact));

router.patch(
  "/:id/favorite",
  authenticate,
  validateBody(schemas.updateStatusContactSchema),
  ctrlWrapper(ctrl.updateStatusContact)
);

module.exports = router;

// contactSchema.post("save", (error, data, next) => {
//   const { name, code } = error;
//   error.status = name === "MongoServerError" && code === 11000 ? 409 : 400;
//   next();
// });

// const {
//   addContactSchema,
//   updateContactSchema,
//   updateStatusContactSchema,
// } = require("../../schemas");
