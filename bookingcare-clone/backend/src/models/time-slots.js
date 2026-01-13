'use strict';

const { Model } = require('sequelize');
const booking = require('./booking');

module.exports = (sequelize, DataTypes) => {
  class TimeSlot extends Model {
    static associate(models) {
      TimeSlot.hasOne(models.Booking,{foreignKey:"schedule_id"})
    }
  }

  TimeSlot.init(
    {
        start_time:{
                  type: DataTypes.DATE,
                  allowNull: false
        },
        end_time: {
          type: DataTypes.DATE,
          allowNull: false 
        },
        is_available:{
          type: DataTypes.BOOLEAN,
        },
        doctor_id:{
          type: DataTypes.BIGINT,
          allowNull: true,
          references:{
            model: "doctors",
            key: "id"
          },
          onUpdate:"CASCADE",
          onDelete:"SET NULL"
        },
        schedule_id:{
          type: DataTypes.BIGINT,
          allowNull: true,
          references:{
            model: "schedules",
            key: "id"
          },
          onUpdate:"CASCADE",
          onDelete:"SET NULL"
        }
    },
    {
      sequelize,
      modelName: 'TimeSlot',
      tableName: 'time_slots',
      timestamps: false
    }
  );

  return TimeSlot;
};
