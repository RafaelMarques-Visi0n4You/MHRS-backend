var Sequelize = require('sequelize');
var SequelizeDB = require('./database');
var User = require('./User');

var Projetos = SequelizeDB.define('projetos', {
    id_projeto: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,    

    },
    responsavel: Sequelize.CHAR(256),
    titulo_projeto: Sequelize.CHAR(256),
    estado: Sequelize.CHAR(256),
    data_criação: Sequelize.DATE,
    data_atribuicao: Sequelize.DATE,
    descricao: Sequelize.TEXT,
    desenvolvedores: Sequelize.ARRAY(Sequelize.STRING),
    objetivos: Sequelize.JSONB,
    data_inicio: Sequelize.DATE,
    data_final_prevista: Sequelize.DATE,
    comentarios: Sequelize.JSONB,
    imagem: Sequelize.TEXT,
    pontosBloqueio: Sequelize.JSONB,
    data_conclusao: Sequelize.DATE,
},
{
    tableName: 'PROJETOS',
    timestamps: false,
    freezeTableName: true
});
module.exports = Projetos;