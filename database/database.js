const Sequelize = require('sequelize');
const {database} = require('./config_database');

const sequelize = new Sequelize(
  database.database,
  database.username,
  database.password, {
    host: 'tr-seidor1.database.windows.net',
    dialect:'mssql',

    port: '1433', //evita las querys al correr la app

    logging: false,
    dialectOptions: {
      encrypt: true,
      dateStrings: true,
      typeCast: function (field, next) { // for reading from database
        if (field.type === 'DATETIME') {
          return field.string()
        }
        return next()
      },
      useUTC: false, // for reading from database
      },
});

module.exports = sequelize;