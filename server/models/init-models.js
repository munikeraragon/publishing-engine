var DataTypes = require("sequelize").DataTypes;
var _ContactMessage = require("./ContactMessage");
var _User = require("./User");

function initModels(sequelize) {
  var ContactMessage = _ContactMessage(sequelize, DataTypes);
  var User = _User(sequelize, DataTypes);


  return {
    ContactMessage,
    User,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
