'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Specialties extends Model {
    static associate(models) {
      // User.hasMany(models.Booking, { foreignKey: 'userId' });
      Specialties.belongsToMany(models.Doctor,{
        foreignKey: 'specialties_id',
        otherKey: 'doctor_id',
        through: models.DoctorSpecialty
      })
    }
  }

  Specialties.init(
    {   
        id: {
          type: DataTypes.BIGINT,
          autoIncrement: true,
          primaryKey: true
        },
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
      tableName: 'specialties',
      createdAt: "created_at"
    }
  );

  return Specialties;
};
