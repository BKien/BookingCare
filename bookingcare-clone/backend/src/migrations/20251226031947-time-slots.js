'use strict';

import { BOOLEAN, Sequelize } from "sequelize";

export default{
  async up(queryInterface,sequelize){
    await queryInterface.createTable("time-slots",{
        id:{
          type: Sequelize.BIGINT,
          autoIncrement: true,
          primaryKey: true,
          allowNull: false
        },
        start_time:{
          type: Sequelize.DATE,
          allowNull: false
        },
        end_time: {
          type: Sequelize.DATE,
          allowNull: false 
        },
        is_available:{
          type: BOOLEAN,
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
        schedule_id:{
          type: Sequelize.BIGINT,
          allowNull: true,
          references:{
            model: "schedules",
            key: "id"
          },
          onUpdate:"CASCADE",
          onDelete:"SET NULL"
        }
    })
  },
  async down(queryInterface){
    await queryInterface.dropTable("time-slots")
  }
}
