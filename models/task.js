const { Schema, model } = require("mongoose");
// const Joi = require("joi");

const { handleMongooseError } = require("../helpers");

const taskMongooseSchema = new Schema();

taskMongooseSchema.post("save", handleMongooseError);

// const taskAddSchema = Joi.object({

// });

// const updateFavoriteSchema = Joi.object({
//   favorite: Joi.boolean().required(),
// });

const schemas = {};

const Task = model("task", taskMongooseSchema);

module.exports = { schemas, Task };
