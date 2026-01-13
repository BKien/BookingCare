export default {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("specialties", {
      id: {
        type: Sequelize.BIGINT,
        primaryKey: true,
        autoIncrement: true
      },

      description: {
        type: Sequelize.TEXT,
        allowNull: false
      },

      created_at: {
        type: Sequelize.DATE,
        allowNull: false
        
      },
      name: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      img :{
        type: Sequelize.TEXT,
        allowNull: false
      },
      doctor_id:{
        type: Sequelize.BIGINT,
        allowNull: true,
        references: {
          model: "doctors",
          key: "id"
        },
        onUpdate: "CASCADE",
        onDelete: "SET NULL"
      }
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable("specialties");
  }
};
