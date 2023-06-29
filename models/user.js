const {Schema, model} = require("mongoose");
const Joi = require("joi");

const {handleMongooseError} = require("../helpers");

const emailRegexp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Set name for user"],
    },
    password: {
      type: String,
      required: [true, "Set password for user"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
    },
    thema: {
      type: String,
      enum: ["dark", "light", "violet"],
      required: false,
      default: "dark",
    },
    avatarURL: {
      type: String,
      required: true,
    },
    token: {
      type: String,
      default: "",
    },
  },

  {versionKey: false, timestamps: true}
);

userSchema.post("save", handleMongooseError);

const registerSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().pattern(emailRegexp).required(),
  password: Joi.string().min(6).required(),
});

const loginSchema = Joi.object({
  email: Joi.string().pattern(emailRegexp).required(),
  password: Joi.string().min(6).required(),
});

const updateSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().pattern(emailRegexp).required(),
  password: Joi.string().min(6).required(),
  avatarURL: Joi.string(),
});

const themaSchema = Joi.object({
  thema: Joi.string().valid("dark", "light", "violet").required(),
});

const supportSchema = Joi.object({
  email: Joi.string().pattern(emailRegexp).required(),
  comment: Joi.string().min(1).required(),
});

const schemas = {
  registerSchema,
  loginSchema,
  themaSchema,
  updateSchema,
  supportSchema,
};

const User = model("user", userSchema);

module.exports = {User, schemas};
