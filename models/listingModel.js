const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Listing = sequelize.define('Listing', {
  title: { type: DataTypes.STRING, allowNull: false },
  description: { type: DataTypes.TEXT, allowNull: false },
  rent: { type: DataTypes.DECIMAL, allowNull: false },
  address: { type: DataTypes.STRING, allowNull: false },
  rooms: { type: DataTypes.INTEGER, allowNull: false },
  contact_info: { type: DataTypes.STRING, allowNull: false }
});

module.exports = Listing;
