'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const transaction = await queryInterface.sequelize.transaction();

    try {
      // 1. Thêm cột url nếu chưa có (nếu có rồi bạn có thể bỏ qua bước này)
      // Kiểm tra xem cột đã tồn tại chưa để tránh lỗi
      const tableDefinition = await queryInterface.describeTable('clinics');
      if (!tableDefinition.url) {
        await queryInterface.addColumn('clinics', 'url', {
          type: Sequelize.STRING,
          allowNull: true,
        }, { transaction });
      }

      // 2. Cập nhật dữ liệu bằng Raw SQL (Tối ưu cho Production)
      // Lưu ý: Cú pháp nối chuỗi (concatenation) khác nhau giữa các Database
      const dialect = queryInterface.sequelize.getDialect();
      let updateSql = '';

      if (dialect === 'mysql' || dialect === 'mariadb') {
        // MySQL dùng hàm CONCAT
        updateSql = 'UPDATE clinics SET url = CONCAT("/clinics/", id)';
      } else if (dialect === 'postgres' || dialect === 'sqlite') {
        // Postgres và SQLite dùng toán tử ||
        updateSql = 'UPDATE clinics SET url = \'/clinics/\' || id';
      } else if (dialect === 'mssql') {
        // SQL Server dùng dấu +
        updateSql = 'UPDATE clinics SET url = \'/clinics/\' + CAST(id AS VARCHAR)';
      }

      if (updateSql) {
        await queryInterface.sequelize.query(updateSql, { transaction });
      }

      await transaction.commit();
    } catch (err) {
      await transaction.rollback();
      throw err;
    }
  },

  down: async (queryInterface, Sequelize) => {
    // Hoàn tác: Xóa cột url hoặc set url về null
    await queryInterface.removeColumn('clinics', 'url');
  }
};