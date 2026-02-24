require('dotenv').config();

module.exports = {
  development: {
    username: process.env.DB_USERNAME || 'root',
    password: process.env.DB_PASSWORD || null,
    database: process.env.DB_DATABASE || 'bookingcare_clone',
    host: process.env.DB_HOST || '127.0.0.1',
    dialect: 'mysql'
  },

  test: {
    username: 'root',
    password: null,
    database: 'bookingcare_test',
    host: '127.0.0.1',
    dialect: 'mysql'
  },

  production: {
    use_env_variable: 'DATABASE_URL',
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT, // <<< THÊM DÒNG NÀY
    dialect: 'mysql',
    /* Cấu hình SSL bên dưới là bắt buộc để chạy với Aiven */
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false // Giúp bỏ qua việc kiểm tra file ca.pem trên Render
      }
    },
    timezone: "+07:00", // Tùy chọn: Chỉnh múi giờ Việt Nam
  }
};
