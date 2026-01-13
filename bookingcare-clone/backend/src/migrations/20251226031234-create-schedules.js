'use strict';

import { Sequelize } from "sequelize";

export default{
  async up(queryInterface,sequelize){
    await queryInterface.createTable("schedules",{
      id:{
        type: Sequelize.BIGINT,
        autoIncrement: true,
     
        primaryKey: true
      },
      date:{
        type: Sequelize.DATE,
        allowNull: false
      },
      created_at:{
        type: Sequelize.DATE,
        allowNull: false
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false
      },
      doctor_id: {
        type: Sequelize.BIGINT,
        allowNull: true,
        references:{
          model: "doctors",
          key: "id"
        },
        onUpdate:"CASCADE",
        onDelete:"SET NULL"
      }
    })
  },
  async down(queryInterface){
    await queryInterface.dropTable("schedules")
  }
}
