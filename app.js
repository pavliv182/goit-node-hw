const express = require("express");
const logger = require("morgan");
const cors = require("cors");

require("dotenv").config();

const contactsRouter = require("./routes/api/contacts");

const app = express();

// настройки морган

const formatsLogger = app.get("env") === "development" ? "dev" : "short";

// мидлвары
// морган - логирует в консоле действия на сервере

app.use(logger(formatsLogger));

app.use(cors());

// мидлвар который переделывает тело post запроса с json на обьект. если не добавлен будем получать undefined

app.use(express.json());

app.use("/api/contacts", contactsRouter);

app.use((req, res) => {
  res.status(404).json({ message: "Not found" });
});

// обрабатывает все ошибки сервера(и прокинутые через next в catch)

app.use((err, req, res, next) => {
  const { status = 500, message = "Server error" } = err;
  res.status(status).json({ message });
});

module.exports = app;

// app.use((err, req, res, next) => {
//   res.status(500).json({ message: err.message });
// });
