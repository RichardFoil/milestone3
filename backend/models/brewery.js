'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Brewery extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Brewery.init({
    id:{
     type: DataTypes.STRING,
     primaryKey: true,
     allowNull: false,
    }, 
    name: DataTypes.STRING,
    brewery_type: DataTypes.STRING,
    street: DataTypes.STRING,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    phone: DataTypes.STRING,
    website_url: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Brewery',
  });
  return Brewery;
};