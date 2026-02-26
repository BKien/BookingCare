'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const transaction = await queryInterface.sequelize.transaction();

    try {
      const dialect = queryInterface.sequelize.getDialect();
      let deleteSql = '';

      // Xác định câu lệnh SQL tùy theo hệ quản trị DB
      if (dialect === 'mysql' || dialect === 'mariadb') {
        // MySQL cho phép ORDER BY và LIMIT trực tiếp trong DELETE
        deleteSql = 'DELETE FROM clinics ORDER BY id DESC LIMIT 1';
      } else if (dialect === 'postgres' || dialect === 'sqlite') {
        // Postgres/SQLite cần dùng subquery
        deleteSql = 'DELETE FROM clinics WHERE id = (SELECT id FROM clinics ORDER BY id DESC LIMIT 1)';
      } else if (dialect === 'mssql') {
        // SQL Server dùng TOP(1)
        deleteSql = 'DELETE FROM clinics WHERE id = (SELECT TOP(1) id FROM clinics ORDER BY id DESC)';
      }

      if (deleteSql) {
        await queryInterface.sequelize.query(deleteSql, { transaction });
      }

      await transaction.commit();
    } catch (err) {
      await transaction.rollback();
      throw err;
    }
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * LƯU Ý: Rất khó để hoàn tác (Undo) một lệnh xóa nếu bạn không có bản sao lưu dữ liệu.
     * Thông thường hàm down sẽ để trống hoặc ghi chú lại.
     */
    console.log('Không thể hoàn tác lệnh xóa bản ghi cuối cùng trừ khi bạn chèn lại dữ liệu bằng tay.');
  }
};