var Sequelize = require('sequelize');
var SequelizeDB = require('./database');

var Empresa = SequelizeDB.define('empresa', {
    id_empresa: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nome_empresa: Sequelize.CHAR(256),
    contacto_empresa: Sequelize.INTEGER,
    email_empresa: Sequelize.CHAR(256),
},
{
    tableName: 'EMPRESA',
    timestamps: false,
    freezeTableName: true
});

module.exports = Empresa;