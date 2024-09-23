const { Sequelize } = require('sequelize');

const config = Object.assign({}, require(__dirname + '/../config'))[ process.env.NODE_ENV || 'development'];

const sequelize = new Sequelize(config);

const db = require('./index.js');

(async() => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
        
        db.sequelize = sequelize;
        db.Sequelize = Sequelize;

    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
})()

module.exports = db;