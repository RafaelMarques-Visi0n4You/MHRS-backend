const Sequelize = require('sequelize');
const SequelizeDB = require('./database');
const Calendario = require('./Calendario');

const Ferias = SequelizeDB.define('ferias', {
    id_solicitacao: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    id_calendario:{
        type:Sequelize.INTEGER,
        references:{
            model: Calendario,
            key: 'id_calendario'
        }
    },
    data_inicio: Sequelize.DATE,
    data_conclusao: Sequelize.DATE,
    duracao: Sequelize.INTEGER,
    estado: Sequelize.CHAR(256),
    validador: Sequelize.CHAR(256),
    comentarios: Sequelize.TEXT,
},
{
    tableName:'FERIAS',
    timestamps: false,
    freezeTableName: true
});

Calendario.hasMany(Ferias, {foreignKey: 'id_calendario'});
Ferias.belongsTo(Calendario, {foreignKey: 'id_calendario'});

module.exports = Ferias;