const Sequelize = require('sequelize');

const sequelize = new Sequelize('luiztools', 'amigo', null, {
    dialect: 'postgres',
    host: 'localhost'
});

module.exports = sequelize;