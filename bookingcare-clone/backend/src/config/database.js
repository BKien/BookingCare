import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: "mysql",
    logging: false, // tắt log SQL cho gọn
    timezone: "+07:00",
  }
);

const connectDatabase = async () => {
  try {
    await sequelize.authenticate();
    console.log("✅ MySQL connected successfully");

    await sequelize.sync(); // 👈 TẠO BẢNG
    console.log("✅ Database synced");
  } catch (error) {
    console.error("❌ Database error:", error);
  }
};


export { sequelize, connectDatabase };
