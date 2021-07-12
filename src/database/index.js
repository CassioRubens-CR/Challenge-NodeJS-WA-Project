const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const Laboratory = require('../models/Laboratory');
const Exams = require('../models/Exams');

const connection = new Sequelize(dbConfig);

Laboratory.init(connection);
Exams.init(connection);

Laboratory.associate(connection.models);
Exams.associate(connection.models);

module.exports = connection;
