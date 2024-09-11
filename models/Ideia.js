const Sequelize = require('sequelize');
const SequelizeDB = require('./database');
const User = require('./User');
const Projetos = require('./Projetos');

const Ideia = SequelizeDB.define('ideia', {
    id_ideia: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    id_user:{
        type:Sequelize.INTEGER,
        references:{
            model: User,
            key: 'id_user'
        }
    },
    id_projeto:{
        type:Sequelize.INTEGER,
        references:{
            model: Projetos,
            key: 'id_projeto'
        }
    },
    titulo_ideia: Sequelize.CHAR(256),
    descricao: Sequelize.TEXT,
    data_criacao: Sequelize.DATE,
    estado: Sequelize.CHAR(256),
    ficheiro_complementar: Sequelize.TEXT,
    validador: Sequelize.CHAR(256),
    comentarios: Sequelize.TEXT,
},
{
    tableName: 'IDEIA',
    timestamps: false,
    freezeTableName: true
});

User.hasMany(Ideia, {foreignKey: 'id_user'});
Ideia.belongsTo(User, {foreignKey: 'id_user'});

Projetos.hasMany(Ideia, {foreignKey: 'id_projeto'});
Ideia.belongsTo(Projetos, {foreignKey: 'id_projeto'});



module.exports = Ideia;