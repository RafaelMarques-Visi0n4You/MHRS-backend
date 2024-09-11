const Sequelize = require('sequelize');
const SequelizeDB = require('./database');
const Blog = require('./Blog');
const User = require('./User');

const Visita = SequelizeDB.define('visita', {
    id_visita: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    id_publicacao: {
        type: Sequelize.INTEGER,
        references: {
            model: Blog,
            key: 'id_publicacao'
        }
    },
    id_user: {
        type: Sequelize.INTEGER,
        references: {
            model: User,
            key: 'id_user'
        }
    },

    titulo_publicacao: Sequelize.CHAR(256),
    tipo_publicacao: Sequelize.CHAR(256),
    data_validacao: Sequelize.DATE,
    validador: Sequelize.CHAR(256),
    local_visita: Sequelize.CHAR(256),
    data_visita: Sequelize.DATE,
    duracao_visita: Sequelize.CHAR(256),
    motivo_visita: Sequelize.CHAR(256),
    descricao: Sequelize.TEXT,
    imagem: Sequelize.TEXT,
    estado: Sequelize.CHAR(256),
},
    {
        tableName: 'VISITA',
        timestamps: false,
        freezeTableName: true
    });

Blog.hasMany(Visita, { foreignKey: 'id_publicacao' });
Visita.belongsTo(Blog, { foreignKey: 'id_publicacao' });
User.hasMany(Visita, { foreignKey: 'id_user' });
Visita.belongsTo(User, { foreignKey: 'id_user' });
module.exports = Visita;