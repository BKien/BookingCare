'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Patient extends Model {
    static associate(models) {
        Patient.hasOne(models.Booking,{foreignKey:"patient_id"})
      
    }
  }

  Patient.init(
  {
    id:{
        type: DataTypes.BIGINT,
        autoIncrement: true,
        primaryKey: true
    },
    name:{
        type: DataTypes.STRING
    },
    gender:{
        type: DataTypes.STRING
    },
    number:{
        type: DataTypes.BIGINT
    },
    email:{
        type: DataTypes.STRING
    },
    birth:{
        type: DataTypes.DATE
    },
    address:{
        type: DataTypes.STRING
    }
  },
  {
    sequelize,
    modelName: 'Patient',
    tableName: 'patients',

    createdAt: 'created_at',
    updatedAt: 'updated_at',
    deletedAt: 'deleted_at',

    paranoid: false
  } 
    );


  return Patient;
};
