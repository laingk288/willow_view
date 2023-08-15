const Sequelize = require('sequelize'); //import database

let database = 'wvfarm';
let username = 'root';
let password ='password';

const config = new Sequelize(database, username, password, {dialect: 'mariadb'});

module.exports = config;
