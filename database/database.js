const Sequelize = require('sequelize');
const connection = new Sequelize('perguntaserespostas', 'root', 'Srgsrg@320320',{
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = connection;