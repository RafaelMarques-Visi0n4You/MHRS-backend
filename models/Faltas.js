const Sequelize = require('sequelize');
const SequelizeDB = require('./database');
const Calendario = require('./Calendario');

const Faltas = SequelizeDB.define('faltas', {
    id_falta: {
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
    data_falta: Sequelize.DATE,
    justificacao: Sequelize.TEXT,
    tipo: Sequelize.CHAR(256),
    estado: Sequelize.CHAR(256),
    validador: Sequelize.CHAR(256),
    comentarios: Sequelize.TEXT,
},
{
    tableName: 'FALTAS',
    timestamps: false,
    freezeTableName: true
});

Calendario.hasMany(Faltas, {foreignKey: 'id_calendario'});
Faltas.belongsTo(Calendario, {foreignKey: 'id_calendario'});

module.exports = Faltas;