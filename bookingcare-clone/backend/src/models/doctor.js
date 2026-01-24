'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Doctor extends Model {
    static associate(models) {
      // User.hasMany(models.Booking, { foreignKey: 'userId' });
      Doctor.belongsTo(models.User,{
          foreignKey: 'user_id',
          as: 'user'
      })

      Doctor.hasOne(models.Booking,{foreignKey:"doctor_id"})
    }
  }

  Doctor.init(
  {
    id: {
      type: DataTypes.BIGINT,
      autoIncrement: true,
      primaryKey: true
    },
    description: DataTypes.STRING,
    price: DataTypes.INTEGER,
    img: DataTypes.TEXT
  },
  {
    sequelize,
    modelName: 'Doctor',
    tableName: 'doctors',

    createdAt: 'created_at',
    updatedAt: 'updated_at',
    deletedAt: 'deleted_at',

    paranoid: false
  } 
    );


  return Doctor;
};
