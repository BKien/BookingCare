export default {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("doctors", {
      id: {
        type: Sequelize.BIGINT,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },

      description: {
        type: Sequelize.TEXT,
        allowNull: false
      },

      price: {
        type: Sequelize.BIGINT,
        allowNull: false
      },

      user_id: {
        type: Sequelize.BIGINT,
        allowNull: false,
        references: {
          model: "users",
          key: "id"
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE"
      },

      clinic_id: {
        type: Sequelize.BIGINT,
        allowNull: true,
        references: {
          model: "clinics",
          key: "id"
        },
        onUpdate: "CASCADE",
        onDelete: "SET NULL"
      },

      created_at: {
        type: Sequelize.DATE,
        allowNull: false
        
      },
      img :{
        type: Sequelize.TEXT,
        allowNull: false
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false
      }
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable("doctors");
  }
};
