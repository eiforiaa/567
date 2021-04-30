const Sequelize = require('sequelize');

const sequelize = require('../../config/database');

const tableName = 'attractions';

const Attraction = sequelize.define('Attraction', {
  id: {
    type: Sequelize.NUMBER,
    unique: true,
    primaryKey: true,
  },
  Name: {
    type: Sequelize.STRING,
  },
  admArea: {
    type: Sequelize.STRING,
  },
  district: {
    type: Sequelize.STRING,
  },
  address: {
    type: Sequelize.STRING,
  },
  
}, { tableName });

module.exports = Attraction;
