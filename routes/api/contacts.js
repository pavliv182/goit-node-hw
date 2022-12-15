const express = require("express");
const router = express.Router();
const ctrl = require("../../controllers/contacts");

const { ctrlWrapper } = require("../../helpers");
const { validateBody } = require("../../middlewares");

const schemas = require("../../schemas/contactSchema");

// После добавления контроллера стало так:

router.get("/", ctrlWrapper(ctrl.getAll));

router.get("/:contactId", ctrlWrapper(ctrl.getById));

router.post("/", validateBody(schemas.contactSchema), ctrlWrapper(ctrl.add));

router.put(
  "/:contactId",
  validateBody(schemas.contactSchema),
  ctrlWrapper(ctrl.updateById)
);

router.delete("/:contactId", ctrlWrapper(ctrl.removeById));

router.patch("/:id/favorite");

module.exports = router;

// До добавления котроллера было так:

// const contactSchema = Joi.object({
//   name: Joi.string().required(),
//   email: Joi.string().required(),
//   phone: Joi.string().required(),
// });

// router.get("/", async (req, res, next) => {
//   try {
//     const result = await contacts.listContacts();
//     res.status(200).json(result);
//   } catch (error) {
//     next(error);
//   }
// });

// router.get("/:contactId", async (req, res, next) => {
//   try {
//     const result = await contacts.getContactById(req.params.contactId);
//     if (!result) {
//       throw createError(404, "Not found");
//       //   res.status(404).json({
//       //     message: "Not found",
//       //   });
//     }

//     res.status(200).json(result);
//   } catch (error) {
//     next(error);
//   }
// });

// router.post("/", async (req, res, next) => {
//   try {
//     const { error } = contactSchema.validate(req.body);
//     if (error) {
//       // можно было в месседж указать error.message
//       throw createError(400, "missing required name field");
//     }

//     const result = await contacts.addContact(req.body);

//     res.status(201).json(result);
//   } catch (error) {
//     next(error);
//   }
// });

// router.delete("/:contactId", async (req, res, next) => {
//   try {
//     const result = await contacts.removeContact(req.params.contactId);
//     if (!result) {
//       throw createError(404, "Contact not found");
//     }
//     res.status(204);
//   } catch (error) {
//     next(error);
//   }
// });

// router.put("/:contactId", async (req, res, next) => {
//   try {
//     const { error } = contactSchema.validate(req.body);
//     if (error) {
//       throw createError(400, "missing fields");
//     }
//     const result = await contacts.updateContact(req.params.contactId, req.body);

//     if (!result) {
//       throw createError(404, "Not found");
//     }

//     res.json(result);
//   } catch (error) {
//     next(error);
//   }
// });
