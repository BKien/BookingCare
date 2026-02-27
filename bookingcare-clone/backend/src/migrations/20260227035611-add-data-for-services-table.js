'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('services', [
      {
        name: 'Khám chuyên khoa',
        img: '/public/images/service_1.png',
        link: '/medical-services/speacialty-examination',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Hỗ trợ đặt lịch bằng AI',
        img: '/public/images/service_1.png',
        link: '/medical-services/ai-help-bookings',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('services', null, {});
  }
};