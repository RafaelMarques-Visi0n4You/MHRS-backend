const Sequelize = require('sequelize');
const SequelizeDB = require('./database');
const Empresa = require('./Empresa');
const Projetos = require('./Projetos');
const User = require('./User');
const Despesas = require('./Despesas');

const Reembolsos = SequelizeDB.define('reembolsos', {
    id_reembolso: {
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
    id_despesa:{
        type:Sequelize.INTEGER,
        references:{
            model: Despesas,
            key: 'id_despesa'
        }
    },
    id_projeto: {
        type: Sequelize.INTEGER,
        references: {
            model: Projetos,
            key: 'id_projeto'
    }},
    data_despesa: Sequelize.DATE,
    descricao: Sequelize.CHAR(256),
    valor: Sequelize.DECIMAL(10, 2),
    estado: Sequelize.CHAR(256),
    validador: Sequelize.CHAR(256),
    comentarios: Sequelize.TEXT,
    data_reembolso: Sequelize.DATE,
    destinatario: Sequelize.INTEGER,
},
{
    tableName: 'REEMBOLSOS',
    timestamps: false,
    freezeTableName: true
});
Empresa.hasMany(Reembolsos, {foreignKey: 'id_empresa'});
Reembolsos.belongsTo(Empresa, {foreignKey: 'id_empresa'});
User.hasMany(Reembolsos, {foreignKey: 'id_user'});
Reembolsos.belongsTo(User, {foreignKey: 'id_user'});
Despesas.hasMany(Reembolsos, {foreignKey: 'id_despesa'});
Reembolsos.belongsTo(Despesas, {foreignKey: 'id_despesa'});

module.exports = Reembolsos;