const {Schema, model} = require("mongoose")
const { handleMongooseError } = require("../helpers");
const Joi = require("joi");

const taskSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  priority: {
    type: String,
    enum: ["priority1", "priority2", "priority3"],
    default: "priority1"
  },
  deadline: {
    type: Date,
    default: Date.now,
    require: true,
  },
  owner: {
        type: Schema.Types.ObjectId,  
        ref: 'column',                   
        required: 'true',
    },
}, { versionKey: false, timestamps: true });

const taskJoiSchema = Joi.object({
    title: Joi.string().required(),
    description: Joi.string().required(),
})

const boardSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  owner: {
        type: Schema.Types.ObjectId,  
        ref: 'users',                   
        required: 'true',
    },
}, { versionKey: false, timestamps: true });

const boardJoiSchema = Joi.object({
    title: Joi.string().required(),
})

const columnSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  owner: {
        type: Schema.Types.ObjectId,  
        ref: 'board',                   
        required: 'true',
    },
}, { versionKey: false, timestamps: true });

const columnJoiSchema = Joi.object({
    title: Joi.string().required(),
}, { versionKey: false, timestamps: true })

const schemas = {
  taskJoiSchema,
  boardJoiSchema,
  columnJoiSchema
};

taskSchema.post("save", handleMongooseError);
boardSchema.post("save", handleMongooseError);
columnSchema.post("save", handleMongooseError);

const Task = model("task", taskSchema);
const Board = model("board", boardSchema);
const Column = model("column", columnSchema);

module.exports = {schemas, Task, Board, Column};
