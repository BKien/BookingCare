'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Schedule extends Model {
    static associate(models) {
      // User.hasMany(models.Booking, { foreignKey: 'userId' });
      Schedule.hasMany(models.TimeSlot,{foreignKey:"schedule_id"})
      Schedule.hasMany(models.Booking,{foreignKey:"schedule_id"})
    }
  }

  Schedule.init(
    {
        id:{
          type: DataTypes.BIGINT,
          autoIncrement: true,
          primaryKey: true
        },
        date:{
            type: DataTypes.DATE,
            allowNull: false
        },
        
    },
    {
      sequelize,
      tableName: 'schedules',
      modelName: 'Schedule',
      createdAt: 'created_at',
      updatedAt: 'updated_at',
    }
  );

  return Schedule;
};
