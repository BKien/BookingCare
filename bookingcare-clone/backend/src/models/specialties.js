'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Specialties extends Model {
    static associate(models) {
      // User.hasMany(models.Booking, { foreignKey: 'userId' });
    }
  }

  Specialties.init(
    {
        description: {
        type: DataTypes.TEXT,
        allowNull: false
        },
        name: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        img :{
            type: DataTypes.TEXT,
            allowNull: false
        }
    },
    {
      sequelize,
      modelName: 'Specialties',
      tableName: 'specialties'
    }
  );

  return Specialties;
};
