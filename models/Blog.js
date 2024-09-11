const Sequelize = require('sequelize');
const SequelizeDB = require('./database');

const Blog = SequelizeDB.define('blog', {
    id_publicacao: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        
    },
    titulo_publicacao: Sequelize.CHAR(256),
    tipo_publicacao: Sequelize.CHAR(256),
    validador: Sequelize.CHAR(256),
    data_validacao: Sequelize.DATE,
    estado: Sequelize.CHAR(256),
    comentarios: Sequelize.TEXT,
},
{
    tableName: 'BLOG',
    timestamps: false,
    freezeTableName: true
});


module.exports = Blog;