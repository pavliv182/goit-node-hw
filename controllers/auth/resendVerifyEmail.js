const { User } = require("../../models/user");

const { createError, sendEmail } = require("../../helpers");

const { BASE_URL } = process.env;

const resendVerifyEmail = async (req, res) => {
  const { email } = req.body;
  if (!email) {
    throw createError(400, "missing required field email");
  }
  const user = await User.findOne({ email });
  if (!user || user.verify) {
    throw createError(400, "Verification has already been passed");
  }

  const verifyEmail = {
    to: email,
    subject: "Verify your email",
    html: `<a target="_blank" href="${BASE_URL}/api/auth/verify/${user.verificationToken}">Click verify email</a>`,
  };

  await sendEmail(verifyEmail);

  res.status(200).json({ message: "Verification email sent" });
};

module.exports = resendVerifyEmail;
