'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class serverInformation extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  serverInformation.init({
    version: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'serverInformation',
  });
  return serverInformation;
};