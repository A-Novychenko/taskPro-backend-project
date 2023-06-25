const { controllerWrapper } = require("../../helpers");

const register = require("./register");
const login = require("./login");
const getCurrent = require("./getCurrent");
const logout = require("./logout");
const updateUser = require("./updateUser");
const updateThema = require("./updateThema");

module.exports = {
  register: controllerWrapper(register),
  login: controllerWrapper(login),
  getCurrent: controllerWrapper(getCurrent),
  logout: controllerWrapper(logout),
  updateUser: controllerWrapper(updateUser),
  updateThema: controllerWrapper(updateThema),
};
