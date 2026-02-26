'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn(
      'services',
      'createdAt',
      {type:Sequelize.DATE}
    )

    await queryInterface.addColumn(
      'services',
      'updatedAt',
      {type:Sequelize.DATE}
    )
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('services','createdAt')
    await queryInterface.removeColumn('services','updatedAt')
  }
};
