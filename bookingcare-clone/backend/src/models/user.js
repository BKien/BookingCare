'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      // User.hasMany(models.Booking, { foreignKey: 'userId' });
      User.hasOne(models.Doctor,{
          foreignKey: 'user_id',
          as: 'doctor'
      })
      User.hasOne(models.Patient,{foreignKey:"user_id"})
    }
  }

  User.init(
    {
      email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      fullName: {
        type: DataTypes.STRING,
      },
      role: {
        type: DataTypes.STRING,
        defaultValue: "PATIENT",
      },
      verifyExpiresAt: {
        type: DataTypes.DATE,
        allowNull: true,
        field: "verifyExpiresAt"
      },
      isVerified: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
        field: "isVerified"
      },

      verifyTokenHash: {
        type: DataTypes.STRING,
        allowNull: true,
        field: "verifyTokenHash"
      },
    },
    {
      sequelize,
      modelName: 'User',
      tableName: 'users',
      


    }
  );

  return User;
};
