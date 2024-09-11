const Sequelize = require('sequelize');
const SequelizeDB = require('./database');
const Vaga = require('./Vaga');

const Candidaturas = SequelizeDB.define('candidaturas', {
    id_candidatura: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    id_vaga:{
        type:Sequelize.INTEGER,
        references:{
            model: Vaga,
            key: 'id_vaga'
        }
    },
    data_submissao: Sequelize.DATE,
    status: Sequelize.CHAR(256),
    curriculo: Sequelize.TEXT,
    informacoes_contacto: Sequelize.TEXT,
    resultado: Sequelize.CHAR(256),
    data_resultado: Sequelize.DATE,
    nome_candidato: Sequelize.CHAR(256),
},
{
    tableName: 'CANDIDATURAS',
    timestamps: false,
    freezeTableName: true
});

Vaga.hasMany(Candidaturas, {foreignKey: 'id_vaga', as : 'candidaturas'});
Candidaturas.belongsTo(Vaga, {foreignKey: 'id_vaga', as : 'vaga'});

module.exports = Candidaturas;