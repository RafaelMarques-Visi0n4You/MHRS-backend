const Sequelize = require('sequelize');
const SequelizeDB = require('./database');
const Empresa = require('./Empresa');
const Departamento = require('./Departamento');
const Calendario = require('./Calendario')

const User = SequelizeDB.define('user', {
    id_user: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    id_empresa: {
        type: Sequelize.INTEGER,
        references: {
            model: Empresa,
            key: 'id_empresa',
        }
    },
    id_departamento: {
        type: Sequelize.INTEGER,
        references: {
            model: Departamento,
            key: 'id_departamento',
        }
    },
    id_calendario: {
        type: Sequelize.INTEGER,
        references: {
            model: Calendario,
            key: 'id_calendario'
        }
    },
    nome: Sequelize.CHAR(256),
    nome_utilizador: Sequelize.CHAR(256),
    pass: Sequelize.CHAR(256),
    email: Sequelize.CHAR(256),
    morada: Sequelize.CHAR(256),
    telemovel: Sequelize.INTEGER,
    data_nascimento: Sequelize.DATE,
    genero: Sequelize.CHAR(256),
    pais_regiao: Sequelize.CHAR(256),
    tipo_user: Sequelize.CHAR(256),
    foto_perfil: Sequelize.TEXT,
},
    {
        tableName: 'USER',
        timestamps: false,
        freezeTableName: true,
    });
    
Empresa.hasMany(User, { foreignKey: 'id_empresa' });
User.belongsTo(Empresa, { foreignKey: 'id_empresa' });

Departamento.hasMany(User, { foreignKey: 'id_departamento' });
User.belongsTo(Departamento, { foreignKey: 'id_departamento' });

Calendario.hasMany(User, { foreignKey: 'id_calendario' });
User.belongsTo(Calendario, { foreignKey: 'id_calendario' });


module.exports = User;