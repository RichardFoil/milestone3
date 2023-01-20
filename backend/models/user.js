'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({comments_ratings}) {
      User.hasMany(comments_ratings, { foreignKey: 'id', as: 'user_id'})
    }
  }
    
  User.init({
    id: {
      type: DataTypes.SMALLINT,
      primaryKey: true,
      autoIncrement: true

    },
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    password_digest: DataTypes.STRING
  },{
    sequelize,
    modelName: 'User',
  });
  return User;
};