const express = require("express");

const { ctrlWrapper } = require("../../helpers");

const ctrl = require("../../controllers/auth");

const { validateBody, authenticate, upload } = require("../../middlewares");

const { schemas } = require("../../models/user");

const router = express.Router();

// signup
router.post(
  "/register",
  validateBody(schemas.registerSchema),
  ctrlWrapper(ctrl.register)
);

// verificationToken
router.get("/verify/:verificationToken", ctrlWrapper(ctrl.verify));

// verify
router.post(
  "/verify",
  validateBody(schemas.emailSchema),
  ctrlWrapper(ctrl.resendVerifyEmail)
);

// signin
router.post(
  "/login",
  validateBody(schemas.loginSchema),
  ctrlWrapper(ctrl.login)
);

// current
router.get("/current", authenticate, ctrlWrapper(ctrl.getCurrent));

// logout
router.post("/logout", authenticate, ctrlWrapper(ctrl.logout));

// avatar
router.patch(
  "/avatars",
  authenticate,
  upload.single("avatar"),
  ctrlWrapper(ctrl.updateAvatar)
);

module.exports = router;
