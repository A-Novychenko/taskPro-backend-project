const {Schema, model} = require("mongoose");
const Joi = require("joi");

const {handleMongooseError} = require("../helpers");

const {
  userRegexp: {emailRegexp, nameRegexp, passwordRegexp},
} = require("../regexp");

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
      default: "",
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
  name: Joi.string().min(2).max(32).pattern(nameRegexp).required(),
  email: Joi.string().pattern(emailRegexp).required(),
  password: Joi.string().min(8).max(64).pattern(passwordRegexp).required(),
});

const loginSchema = Joi.object({
  email: Joi.string().required(),
  password: Joi.string().required(),
});

const updateSchema = Joi.object({
  name: Joi.string().min(2).max(32).pattern(nameRegexp).required(),
  email: Joi.string().pattern(emailRegexp).required(),
  password: Joi.string().min(8).max(64).pattern(passwordRegexp).required(),
  avatarURL: Joi.any(),
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
