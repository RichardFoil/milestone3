'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class breweries extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({comments_ratings}) {
      breweries.hasMany(comments_ratings, {foreignKey: 'id', as: 'brewery_id'})
    }
  }
  breweries.init({
    id: {
      type: DataTypes.SMALLINT,
      primaryKey: true,
      autoIncrement: true

    },
    name: DataTypes.STRING,
    brewery_type: DataTypes.STRING,
    street: DataTypes.STRING,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    phone: DataTypes.INTEGER,
    website_url: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'breweries',
  });
  return breweries;
};