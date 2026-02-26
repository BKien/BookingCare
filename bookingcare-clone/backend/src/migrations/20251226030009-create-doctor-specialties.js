'use strict';

const { Sequelize } = require('sequelize');

module.exports = {
  async up(queryInterface,sequelize) {
   await queryInterface.createTable("doctors-specialties",{
      doctor_id:{
        type: Sequelize.BIGINT,
        allowNull: true,
        references:{
          model:"doctors",
          key:"id"
          
        },
        onUpdate: "CASCADE",
        onDelete: "SET NULL"
      },
      specialties_id:{
        type: Sequelize.BIGINT,
        allowNull: true,
        references:{
          model:"specialties",
          key:"id"
        },
        onUpdate: "CASCADE",
        onDelete: "SET NULL"
      }
    })
  },
  async down(queryInterface) {
    await queryInterface.dropTable("doctors-specialties");
  }
};