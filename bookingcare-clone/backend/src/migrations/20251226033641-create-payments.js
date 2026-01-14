
'use strict';

import { BOOLEAN, DataTypes, Sequelize, STRING } from "sequelize";

export default{
  async up(queryInterface,sequelize){
    await queryInterface.createTable("payments",{
        booking_id:{
          type: Sequelize.BIGINT,
          primaryKey: true
        },
        amount:{
          type: Sequelize.BIGINT
        },
        method:{
          type: STRING
        },
        status:{
          type:STRING
        },
        booking_id:{
          type: Sequelize.BIGINT,
          allowNull: true,
          references:{
            model: "bookings",
            key: "id"
          },
          onUpdate:"CASCADE",
          onDelete:"SET NULL"
        },
        createdAt:{
          type: Sequelize.DATE
        },
        updatedAt:{
          type: Sequelize.DATE
        }
        
        
    })
  },
  async down(queryInterface){
    await queryInterface.dropTable("payments")
  }
}
