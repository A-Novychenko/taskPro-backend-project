const {handleMongooseError} = require("../helpers");

// const taskMongooseSchema =

// taskMongooseSchema.post("save", handleMongooseError);

const schemas = {
  // Joi schemas
};

const Task = model("task", taskMongooseSchema);

module.exports = {schemas, Task};
