const { User } = require("../../models/user");

const { createError } = require("../../helpers");

const logout = async (req, res) => {
  console.log("123");
  const { _id } = req.user;
  const user = await User.findById(_id);
  if (!user) {
    throw createError(401, "Not authorized");
  }

  await User.findByIdAndUpdate(_id, { token: "" });
  res.status(204).json({
    message: "Logout success",
  });
};

module.exports = logout;
