'use strict';

const { Model } = require('sequelize');
const { FOREIGNKEYS } = require('sequelize/lib/query-types');

module.exports = (sequelize, DataTypes) => {
  class Booking extends Model {
    static associate(models) {
      Booking.hasMany(models.Payment,{foreignKey:"booking_id"})
      Booking.belongsTo(models.Doctor,{foreignKey:"doctor_id"})
      Booking.belongsTo(models.User,{foreignKey:"user_id"})
      Booking.belongsTo(models.Schedule,{foreignKey:"schedule_id"})
    }
  }

  Booking.init(
    {
        id:{
          type: DataTypes.BIGINT,
          autoIncrement: true,
          primaryKey: true
        },
        status:{
          type: DataTypes.STRING
        },
        createdAt:{
          type:DataTypes.DATE
        },
        doctor_id:{
          type: DataTypes.BIGINT,
          allowNull: true,
          references:{
            model: "Doctor",
            key: "id"
          },
          onUpdate:"CASCADE",
          onDelete:"SET NULL"
        },
        user_id: {
        type: DataTypes.BIGINT,
        allowNull: false,
        references: {
          model: "User",
          key: "id"
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE"
      },
        schedule_id:{
          type: DataTypes.BIGINT,
          allowNull: true,
          references:{
            model: "Schedule",
            key: "id"
          },
          onUpdate:"CASCADE",
          onDelete:"SET NULL"
        },
        patient_id:{
          type: DataTypes.BIGINT,
          allowNull:true,
          references:{
            model: "Patient",
            key: "id"
          }
        }
    },
    {
      sequelize,
      modelName: 'Booking',
      tableName: 'bookings'
    }
  );

  return Booking;
};
