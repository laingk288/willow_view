const Sequelize= require('sequelize');
const config= require('../config')

const RotationPlanner = config.define('rotationplanner',{
    
    field_id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    field_name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    acres: {
        type: Sequelize.STRING,
        allowNull: false
    },
    2024: {
        type: Sequelize.STRING,
        allowNull: false
    },
    2023: {
        type: Sequelize.STRING,
        allowNull: false
    },
    2022: {
        type: Sequelize.STRING,
        allowNull: false
    },
    2021: {
        type: Sequelize.STRING,
        allowNull: false
    },
    2020: {
        type: Sequelize.STRING,
        allowNull: false
    },
    2019: {
        type: Sequelize.STRING,
        allowNull: false
    },

}, {timestamps:false});
module.exports = RotationPlanner;