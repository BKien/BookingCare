'use strict';

const { sequelize } = require('../models');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const transaction = await queryInterface.sequelize.transaction()
    try {
      // thêm cột mới
      await queryInterface.addColumn(
        'clinics',
        'url',
        {
          type: Sequelize.STRING
        },
        {transaction}
      )

      // đổ dữ liệu mẫu vào bảng
      await queryInterface.bulkInsert(
        'clinics',
        [
          {url: '/clinics/1'}
        ],
        {transaction}
      )

      await transaction.commit()
    } catch (error) {
      await transaction.rollback()
      throw error
    }
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('clinics','url')
  }
};
