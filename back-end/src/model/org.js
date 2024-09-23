const { DataType } = require('sequelize')
const db = require('./index')

// Définition de l'organisation
const org = db.sequelize.define('org', {
    appname: {
        type: DataType.STRING,
        allowNull: false
    }, 
    username: {
        type: DataType.STRING,
        allowNull: false
    }, 
    password: {
        type: DataTypes.STRING,
        allowNull: false
    }, 
    org: {
        type: DataTypes.STRING,
        allowNull: false
    }, 
    logo: {
        type: DataTypes.STRING,
        allowNull: true
    }   
}, {
    tableName: 'organizations',
    tymestamps: false
})

module.exports = org