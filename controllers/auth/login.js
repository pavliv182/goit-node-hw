const bcrypt = require("bcrypt");

const { User } = require("../../models/user");

const { createError } = require("../../helpers");

const login = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  const passwordCompare = await bcrypt.compare(password, user.password);

  if (!user || !passwordCompare) {
    throw createError(401, "Email or password is wrong");
  }
  // создаем токен
  const payload = {
    id: user._id,
  };
  const token = jwt.sign(payload, SECRET_KEY, { expiresIn: "24h" });
  // обновляем токен текущему пользователю
  await User.findByIdAndUpdate(user._id, { token });

  res.status(200).json({
    token,
    user: {
      email: user.email,
      subscription: user.subscription,
    },
  });
};

module.exports = login;
