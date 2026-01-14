'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Payment extends Model {
    static associate(models) {
      // User.hasMany(models.Booking, { foreignKey: 'userId' });
      Payment.belongsTo(models.Booking,{foreignKey: 'booking_id'})
    }
  }

  Payment.init(
  {
    amount:{
        type: DataTypes.BIGINT
    },
    status:{
        type: DataTypes.STRING
    },
    method:{
        type: DataTypes.STRING
    },
    booking_id:{
        type: DataTypes.BIGINT,
        allowNull: false,
        primaryKey: true
    }
  },
  {
    sequelize,
    modelName: 'Payment',
    tableName: 'payments',
    deletedAt: 'deleted_at',
    paranoid: false
  } 
    );


  return Payment;
};
