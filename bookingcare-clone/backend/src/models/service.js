'use strict'

const {Model} = require('sequelize')
const { sequelize } = require('.')

module.exports = (sequelize,DataTypes)=>{
    class Services extends Model{
        static associate(models){
           
        }
    }

    Services.init(
        {
            id:{
                type: DataTypes.BIGINT,
                autoIncrement: true,
                primaryKey: true
            },
            name:{
                type: DataTypes.STRING,
                allowNull: false
            },
            img:{
                type: DataTypes.TEXT
            },
            link: DataTypes.TEXT
        }
        ,{
            sequelize,
            modelName: 'Service',
            tableName: 'services'
        }
    )
    return Services
}