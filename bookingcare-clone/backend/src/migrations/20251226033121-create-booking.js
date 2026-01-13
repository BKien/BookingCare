
'use strict';

import { BOOLEAN, Sequelize, STRING } from "sequelize";

export default{
  async up(queryInterface,sequelize){
    await queryInterface.createTable("bookings",{
        id:{
          type: Sequelize.BIGINT,
          autoIncrement: true,
          primaryKey: true
        },
        status:{
          type: STRING
        },
        createdAt:{
          type:Sequelize.DATE
        },
        updatedAt:{
          type: Sequelize.DATE
        },
        doctor_id:{
          type: Sequelize.BIGINT,
          allowNull: true,
          references:{
            model: "doctors",
            key: "id"
          },
          onUpdate:"CASCADE",
          onDelete:"SET NULL"
        },
          user_id: {
          type: Sequelize.BIGINT,
          allowNull: false,
          references: {
            model: "users",
            key: "id"
          },
          onUpdate: "CASCADE",
          onDelete: "CASCADE"
        },
        patient_id: {
          type: Sequelize.BIGINT,
          allowNull: false,
          references: {
            model: "patients",
            key: "id"
          },
          onUpdate: "CASCADE",
          onDelete: "CASCADE"
        }
        ,
        schedule_id:{
          type: Sequelize.BIGINT,
          allowNull: true,
          references:{
            model: "time-slots",
            key: "id"
          },
          onUpdate:"CASCADE",
          onDelete:"SET NULL"
        },
        
    })
  },
  async down(queryInterface){
    await queryInterface.dropTable("bookings")
  }
}
