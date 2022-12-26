const express = require("express");
const router = express.Router();
const ctrl = require("../../controllers/contacts");

const { ctrlWrapper } = require("../../helpers");
const validateBody = require("../../middlewares");

const schemas = require("../../schemas");

// После добавления контроллера стало так:

router.get("/", ctrlWrapper(ctrl.getAll));

router.get("/:contactId", ctrlWrapper(ctrl.getById));

router.post("/", validateBody(schemas.contactSchema), ctrlWrapper(ctrl.add));

router.put(
  "/:id",
  validateBody(schemas.contactSchema),
  ctrlWrapper(ctrl.updateById)
);

router.delete("/:contactId", ctrlWrapper(ctrl.removeById));

router.patch(
  "/:id/favorite",
  validateBody(schemas.updateFavoriteContactSchema),
  ctrlWrapper(ctrl.favoriteById)
);

module.exports = router;
