const Sequelize = require('sequelize');
const SequelizeDB = require('./database');
const Departamento = require('./Departamento');

const Vaga = SequelizeDB.define('vaga', {
    id_vaga: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    id_departamento:{
        type:Sequelize.INTEGER,
        references:{
            model: Departamento,
            key: 'id_departamento'
        }
    },
    descricao: Sequelize.TEXT,
    titulo_vaga: Sequelize.CHAR(256),
    requisitos: Sequelize.ARRAY(Sequelize.STRING),
    imagem: Sequelize.TEXT,
    estado: Sequelize.CHAR(256),
    data_criacao: Sequelize.DATE,
    data_encerramento: Sequelize.DATE,
    candidato_escolhido: Sequelize.CHAR(256),
    contacto_candidato_escolhido: Sequelize.CHAR(256),
    data_atribuicao: Sequelize.DATE,
},
{
    tableName: 'VAGA',
    timestamps: false,
    freezeTableName: true
});

Departamento.hasMany(Vaga, {foreignKey: 'id_departamento'});
Vaga.belongsTo(Departamento, {foreignKey: 'id_departamento'});


module.exports = Vaga;