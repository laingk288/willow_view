const Sequelize= require('sequelize');
const config= require('../config')

const Advertisement = config.define('advertisement', {
    equipment_id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false, 
        primaryKey: true
    },
    equipment_name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    manufacturer: {
        type: Sequelize.STRING,
        allowNull: false
    },
    model: {
        type: Sequelize.STRING,
        allowNull: false
    },
    meter_reads: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    price: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    details: {
        type: Sequelize.STRING,
        allowNull: false
    },
    image: {
        type: Sequelize.STRING,
        allowNull: false
    },

},{timestamps:false});
module.exports = Advertisement;
