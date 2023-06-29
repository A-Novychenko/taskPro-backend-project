const {Schema, model} = require("mongoose");
const {handleMongooseError} = require("../helpers");
const Joi = require("joi");

const taskSchema = new Schema(
  {
    title: {
      type: String,
      default: "",
    },
    description: {
      type: String,
      default: "",
    },
    priority: {
      type: String,
      enum: ["without", "low", "high", "medium"],
      default: "without",
    },
    deadline: {
      type: Date,
      default: Date.now,
      require: true,
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "column",
      required: "true",
    },
  },
  {versionKey: false, timestamps: true}
);

const taskJoiSchema = Joi.object({
  title: Joi.string().required(),
  description: Joi.string().required(),
  deadline: Joi.date(),
  priority: Joi.string().valid("without", "low", "high", "medium"),
});

const boardSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    background: {
      type: String,
      default: "",
    },
    dashboardIcon: {
      type: String,
      default: "",
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "users",
      required: "true",
    },
  },
  {versionKey: false, timestamps: true}
);

const boardJoiSchema = Joi.object({
  title: Joi.string().required(),
  background: Joi.string(),
  dashboardIcon: Joi.string(),
});

const columnSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "board",
      required: "true",
    },
  },
  {versionKey: false, timestamps: true}
);

const columnJoiSchema = Joi.object(
  {
    title: Joi.string().required(),
  },
  {versionKey: false, timestamps: true}
);

const schemas = {
  taskJoiSchema,
  boardJoiSchema,
  columnJoiSchema,
};

taskSchema.post("save", handleMongooseError);
boardSchema.post("save", handleMongooseError);
columnSchema.post("save", handleMongooseError);

const Task = model("task", taskSchema);
const Board = model("board", boardSchema);
const Column = model("column", columnSchema);

module.exports = {schemas, Task, Board, Column};
