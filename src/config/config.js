const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../../.env') });
 
console.log('ENV VARS →', {
  user: process.env.DB_USER,
  pass: process.env.DB_PASS,
  db: process.env.DB_NAME
});
 
module.exports = {
  development: {
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT || 5432,
    dialect: 'postgres',
  }
};