const Sequelize = require('sequelize');
const SequelizeDB = require('./database');
const User = require('./User');
const Projetos = require('./Projetos');

const Despesas = SequelizeDB.define('despesas', {
    id_despesa: {
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
    id_projeto: {
        type: Sequelize.INTEGER,
        references: {
            model: Projetos, 
            key: 'id_projeto'
        }
    },
    data: Sequelize.DATE,
    descricao: Sequelize.TEXT,
    valor: Sequelize.DECIMAL(10, 2),
    validador: Sequelize.CHAR(256),
    estado: Sequelize.CHAR(256),
    comentarios: Sequelize.TEXT,
   
},
{
    tableName: "DESPESAS",
    timestamps: false,
    freezeTableName: true
});

User.hasMany(Despesas, {foreignKey: 'id_user'});
Despesas.belongsTo(User, {foreignKey: 'id_user'});
Projetos.hasMany(Despesas, {foreignKey: 'id_projeto'});
Despesas.belongsTo(Projetos, {foreignKey: 'id_projeto'});


module.exports = Despesas;