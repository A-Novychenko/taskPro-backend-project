const {handleMongooseError} = require("../helpers");

const userSchema = new Schema();

userSchema.post("save", handleMongooseError);

const schemas = {
  //Joi schemas
};

const User = model("user", userSchema);

module.exports = {User, schemas};
