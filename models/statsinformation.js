'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class statsInformation extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  statsInformation.init({
    connect_received: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'statsInformation',
  });
  return statsInformation;
};