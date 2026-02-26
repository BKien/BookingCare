
'use strict';

const { BOOLEAN, Sequelize, STRING } = require('sequelize');

module.exports = {
  async up(queryInterface, sequelize) {
    await queryInterface.createTable("services",{
        id:{
          type: Sequelize.BIGINT,
          autoIncrement: true,
          primaryKey: true
        },
        name:{
          type: Sequelize.STRING,
          allowNull: false
        },
        img:{
          type: Sequelize.TEXT
        },
        link:{
          type: Sequelize.TEXT
        }
        
    })
  },
  async down(queryInterface) {
    await queryInterface.dropTable("services");
  }
};
