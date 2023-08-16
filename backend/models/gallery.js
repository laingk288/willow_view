const Sequelize = require('sequelize');
const config = require('../config')

const GalleryPhoto = config.define('galleryphoto',{

    image_id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    title: {
        type: Sequelize.STRING,
        allowNull: false
    },
    description: {
        type: Sequelize.STRING,
        allowNull: false
    },
    media_type: {
        type: Sequelize.STRING,
        allowNull: false
    },
    videopath: {
        type: Sequelize.STRING,
        allowNull: true
    },
    photopath: {
        type: Sequelize.STRING,
        allowNull: true
    },
    upload_date: {
        type: Sequelize.DATE,
        allowNull: false
    },

}, {timestamps: false});
module.exports = GalleryPhoto;