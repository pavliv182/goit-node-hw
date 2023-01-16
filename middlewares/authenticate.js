const jwt = require("jsonwebtoken");

const { User } = require("../models/user");

const { createError } = require("../helpers");

const { SECRET_KEY } = process.env;

const authenticate = async (req, res, next) => {
  // забираем токен с заголовков запроса
  const { authorization = "" } = req.headers;
  const [bearer, token] = authorization.split(" ");
  if (bearer !== "Bearer") {
    next(createError(401, "Not authorized"));
  }
  try {
    // проверяем зашифрован ли этот токен нашим ключём
    const { id } = jwt.verify(token, SECRET_KEY);
    const user = await User.findById(id);
    if (!user || !user.token || token !== user.token) {
      next(createError(401, "Not authorized"));
    }

    // записываем в req(глобально) информацию о том пользователе который делает запрос
    req.user = user;
    next();
  } catch {
    next(createError(401, "Not authorized"));
  }
};
module.exports = authenticate;
