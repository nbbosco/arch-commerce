module.exports = function(sequelize, DataTypes) {
    const alias = "Usuario"
    const cols = {
        id: {
            type:DataTypes.INTEGER(10).UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        nombre : {
            type : DataTypes.STRING(255),
            allowNull: false
        },
        apellido : {
            type : DataTypes.STRING(255),
            allowNull: false
        },
        email: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        contraseña: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        fecha_nacimiento : {
            type : DataTypes.DATE
        },
        avatar : {
            type : DataTypes.STRING(255)
        },
        billetera : {
            type : DataTypes.STRING(100)
        },
        creador : {
            type : DataTypes.INTEGER
        },
        fecha_inscripcion : {
            type : DataTypes.DATE
        }
    }
    const config = {
        tableName: "usuario",
        timestamp: true,
}
const Usuario = sequelize.define(alias, cols, config);

Usuario.associate = (models) => {

    Usuario.belongsTo(models.Producto, {
        as: 'productos',
        foreignKey: 'FKcreador'
    })
}

return Usuario
}