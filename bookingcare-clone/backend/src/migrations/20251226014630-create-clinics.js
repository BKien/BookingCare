export default{
  async up (queryInterface, Sequelize) {
     await queryInterface.createTable("clinics",{
        id : {
          type: Sequelize.BIGINT,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false
        },
        name:{
          type: Sequelize.STRING,
          allowNull: false
        },
        address:{
          type: Sequelize.TEXT,
          allowNull: false
        },
        description:{
          type: Sequelize.TEXT,
          allowNull: false
        }
        
     })
  },

   async down (queryInterface, Sequelize) {
    await queryInterface.dropTable("clinics")
  }
}
   

