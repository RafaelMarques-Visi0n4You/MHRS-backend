const { Sequelize }= require('sequelize');

const sequelize = new Sequelize(
  'devikweb_mhrs',
  'devikweb_mhrsUser',
  'iGFdbfWpI5Y}',
  {
    host: '185.32.190.4',
    dialect: 'postgres',
    port: 5432,
  }
);

module.exports = sequelize;
