'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Payment extends Model {
    static associate(models) {
      // User.hasMany(models.Booking, { foreignKey: 'userId' });
      Payment.belongsTo(models.Booking,{foreignKey: 'doctor_id'})
    }
  }

  Payment.init(
  {
    id:{
      type: DataTypes.BIGINT,
      autoIncrement: true,
      primaryKey: true
    },
    amount:{
        type: DataTypes.BIGINT
    },
    status:{
        type: DataTypes.STRING
    },
    method:{
        type: DataTypes.STRING
    },
    doctor_id:{
        type: DataTypes.BIGINT,
        allowNull: false
    }
  },
  {
    sequelize,
    modelName: 'Payment',
    tableName: 'payments',

    createdAt: 'created_at',
    updatedAt: 'updated_at',
    deletedAt: 'deleted_at',

    paranoid: false
  } 
    );


  return Payment;
};
