
'use strict';

import { BOOLEAN, Sequelize, STRING } from "sequelize";

export default{
  async up(queryInterface,sequelize){
    await queryInterface.createTable("payments",{
        amount:{
          type: Sequelize.BIGINT
        },
        method:{
          type: STRING
        },
        status:{
          type:STRING
        },
        bookings_id:{
          type: Sequelize.BIGINT,
          allowNull: true,
          references:{
            model: "bookings",
            key: "id"
          },
          onUpdate:"CASCADE",
          onDelete:"SET NULL"
        }
        
        
    })
  },
  async down(queryInterface){
    await queryInterface.dropTable("payments")
  }
}
