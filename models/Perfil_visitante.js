const Sequelize = require('sequelize');
const SequelizeDB = require('./database');
const Empresa = require('./Empresa');

const Perfil_visitante = SequelizeDB.define('perfil_visitante', {
    id_user_visitante: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,

    },
    id_empresa:{
        type:Sequelize.INTEGER,
        references:{
            model: Empresa,
            key: 'id_empresa'
        }
    },
    nome_utilizador: Sequelize.CHAR(256),
    pass: Sequelize.CHAR(256),
    email: Sequelize.CHAR(256),
},
{
    tableName: 'PERFIL_VISITANTE',
    timestamps: false,
    freezeTableName: true
});

Perfil_visitante.belongsTo(Empresa, {foreignKey: 'id_empresa'});
Empresa.hasMany(Perfil_visitante, {foreignKey: 'id_empresa'});

module.exports = Perfil_visitante;