'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Clinic extends Model {
    static associate(models) {
      // User.hasMany(models.Booking, { foreignKey: 'userId' });
    }
  }

  Clinic.init(
    {
        id:{
          type:DataTypes.BIGINT,
          autoIncrement: true,
          primaryKey: true
        },
        name:{
          type: DataTypes.STRING,
          allowNull: false
        },
        address:{
          type: DataTypes.TEXT,
          allowNull: false
        },
        description:{
          type: DataTypes.TEXT,
          allowNull: false
        },
        img:{
          type: DataTypes.TEXT,
          allowNull: false
        }
    },
    {
      sequelize,
      modelName: 'Clinic',
      tableName: 'clinics'
    }
  );

  return Clinic;
};
