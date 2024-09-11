const Sequelize = require('sequelize');
const SequelizeDB = require('./database');
const Blog = require('./Blog')
const User = require('./User')

const Noticia = SequelizeDB.define('noticia', {
    id_noticia: {
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
    validador: Sequelize.CHAR(256),
    data_validacao: Sequelize.DATE,
    data_noticia: Sequelize.DATE,
    descricao: Sequelize.TEXT,
    imagem: Sequelize.TEXT,
    estado: Sequelize.CHAR(256),
},
{
    tableName: 'NOTICIA',  
    timestamps: false,
    freezeTableName: true
});

Blog.hasMany(Noticia, {foreignKey: 'id_publicacao'});
Noticia.belongsTo(Blog, {foreignKey: 'id_publicacao'});
User.hasMany(Noticia, {foreignKey: 'id_user'});
Noticia.belongsTo(User, {foreignKey: 'id_user'});


module.exports = Noticia;