'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class RatingsAndComments extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    // static associate(models) {
    //   RatingsAndComments.belongsTo(models.Users, {
    //     foreignKey: 'user_id',
    //     as: 'user_id'
    //   });
    //   RatingsAndComments.belongsTo(models.Breweries, {
    //     foreignKey: 'Brewery_id',
    //     as: 'brewery_id'
    //   });
    // }
  
  }
  RatingsAndComments.init({
    Rating: DataTypes.INTEGER,
    Comment: DataTypes.STRING,
    user_id: DataTypes.INTEGER,
    Brewery_id: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'RatingsAndComments',
  });
  return RatingsAndComments;
};