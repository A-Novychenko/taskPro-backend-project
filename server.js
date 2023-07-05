const express = require("express");
const logger = require("morgan");
const cors = require("cors");
const mongoose = require("mongoose");
const swaggerUI = require("swagger-ui-express");
require("dotenv").config();

const authRouter = require("./routes/api/auth");
const boardsRouter = require("./routes/api/boards");
const {createErrorReq} = require("./helpers");
const swaggerDocument = require("./swagger.json");

const {DB_HOST, PORT = 3001} = process.env;

const app = express();
const formatsLogger = app.get("env") === "development" ? "dev" : "short";

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());

app.use("/api/auth", authRouter);
app.use("/api/boards", boardsRouter);
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerDocument));
app.use(express.static("public"));
app.use((_, res, __) => {
  res.status(404).json({
    status: "error",
    code: 404,
    message: "Use api on routes: /api/boards",
    data: "Not found",
  });
});
app.use((err, req, res, next) => {
  const {status = 500, message = "Server error"} = err;
  const {statusText, codeErr, messageDescr, dataDescr} = createErrorReq(
    status,
    message
  );

  res.status(status).json({
    status: statusText,
    code: codeErr,
    message: messageDescr,
    data: dataDescr,
  });
});

mongoose
  .connect(DB_HOST)
  .then(() => {
    app.listen(PORT);
  })
  .catch((err) => {
    console.log(`Server not running. Error message: ${err.message}`);
    process.exit(1);
  });
