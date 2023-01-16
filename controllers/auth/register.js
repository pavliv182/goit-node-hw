const bcrypt = require("bcrypt");
const gravatar = require("gravatar");

const { User } = require("../../models/user");

const { createError } = require("../../helpers");

const register = async (req, res) => {
  //   const { error } = User.validate(req.body);
  //   if (error) {
  //     throw createError(400, "Ошибка от Joi или другой библиотеки валидации");
  //   }

  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (user) {
    throw createError(409, "Email in use");
  }

  const hashPassword = await bcrypt.hash(password, 10);
  const avatarURL = gravatar.url(email);

  const newUser = await User.create({
    ...req.body,
    password: hashPassword,
    avatarURL,
  });

  res.status(201).json({
    // name: newUser.name,
    email: newUser.email,
    subscription: newUser.subscription,
  });
};

module.exports = register;
