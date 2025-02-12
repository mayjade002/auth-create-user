const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const User = sequelize.define('User', {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    name: { type: DataTypes.STRING, allowNull: false },
    email: { type: DataTypes.STRING, unique: true, allowNull: false },
    password: { type: DataTypes.STRING, allowNull: false },
}, {
    timestamps: true
});

sequelize.sync()
    .then(() => console.log('📦 Tabla de usuarios sincronizada'))
    .catch(err => console.error('❌ Error en la sincronización:', err));

module.exports = User;