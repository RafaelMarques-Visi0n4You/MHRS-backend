const Sequelize = require('sequelize');
const SequelizeDB = require('./database');
const Empresa = require('./Empresa');
const User = require('./User');

const Notificacoes = SequelizeDB.define('notificacoes', {
    id_notificacao: {
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
    id_user:{
        type:Sequelize.INTEGER,
        references:{
            model: User,
            key: 'id_user'
        }
    },
    mensagem: Sequelize.TEXT,
    data: Sequelize.DATE,
    estado: Sequelize.CHAR(256),
},
{
    tableName: 'NOTIFICACOES',
    timestamps: false,
    freezeTableName: true
});

Empresa.hasMany(Notificacoes, {foreignKey: 'id_empresa'});
Notificacoes.belongsTo(Empresa, {foreignKey: 'id_empresa'});
User.hasMany(Notificacoes, {foreignKey: 'id_user'});
Notificacoes.belongsTo(User, {foreignKey: 'id_user'});


module.exports = Notificacoes;