require('dotenv').config()
require('mysql2/promise');

module.exports = {
  dialect: 'mysql',
  host: process.env.HOSTNAME,
  username: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: 'laboratories_and_exams',
  define: {
    timestamp: true,
    underscored: true,
  }
}
