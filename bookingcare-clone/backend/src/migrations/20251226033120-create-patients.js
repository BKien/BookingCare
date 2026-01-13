'use strict';

import { BOOLEAN, DATE, Sequelize, STRING } from "sequelize";


export default{
  async up(queryInterface,sequelize){
    await queryInterface.createTable("patients",{
        id:{
          type: Sequelize.BIGINT,
          autoIncrement: true,
          primaryKey: true,
          allowNull: false,
        },
        name:{
          type: Sequelize.STRING
        },
        gender:{
          type: Sequelize.STRING
        },
        number:{
          type: Sequelize.BIGINT
        },
        email:{
          type: Sequelize.STRING
        },
        birth:{
          type: Sequelize.DATE
        },
        address:{
          type: Sequelize.STRING
        },
        user_id:{
          type: Sequelize.BIGINT,
          allowNull: true,
          references:{
            model: "users",
            key: "id"
          },
          onUpdate:"CASCADE",
          onDelete:"SET NULL"
        },
        created_at: {
          allowNull: false,
          type: Sequelize.DATE,
          defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        },
        updated_at: {
          allowNull: false,
          type: Sequelize.DATE,
          defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        },
    })
  },
  async down(queryInterface){
    await queryInterface.dropTable("patients")
  }
}
