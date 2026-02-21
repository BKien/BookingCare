'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class DoctorSpecialty extends Model {
    static associate(models) {
      // User.hasMany(models.Booking, { foreignKey: 'userId' });
        
    }
  }

  DoctorSpecialty.init(
  {
    doctor_id: {
        type: DataTypes.BIGINT,
    },
    specialties_id:{
        type: DataTypes.BIGINT,
       
    }
    
  },
  {
    sequelize,
    modelName: 'DoctorSpecialty',
    tableName: 'doctors-specialties',
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    deletedAt: 'deleted_at',

    paranoid: false
  } 
    );


  return DoctorSpecialty;
};
