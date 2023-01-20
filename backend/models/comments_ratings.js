'use strict';
const {
  Model
} = require('sequelize');
const user = require('./user');
module.exports = (sequelize, DataTypes) => {
  class comments_ratings extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(User, breweries) {
      
    }
  }
  comments_ratings.init({
    rating: DataTypes.INTEGER,
    comment: DataTypes.STRING,
    user_id: DataTypes.INTEGER,
    brewery_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'comments_ratings',
  });
  return comments_ratings;
};