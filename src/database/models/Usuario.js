module.exports = function(sequelize, dataTypes) {
    const alias = "usuario"
    const cols = {
        id: {
            type:dataTypes.INTEGER(10).UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        nombre : {
            type : dataTypes.STRING(255),
            allowNull: false
        },
        apellido : {
            type : dataTypes.STRING(255),
            allowNull: false
        },
        email: {
            type: dataTypes.STRING(255),
            allowNull: false
        },
        contraseña: {
            type: dataTypes.STRING(255),
            allowNull: false
        },
        fecha_nacimiento : {
            type : dataTypes.DATE
        },
        avatar : {
            type : dataTypes.STRING(255)
        },
        billetera : {
            type : dataTypes.STRING(100)
        },
        creador : {
            type : dataTypes.INTEGER
        },
        fecha_inscripcion : {
            type : dataTypes.DATE
        }
    }
    const config = {
        tableName: "usuario",
        timestamp: true,
}
const Usuario = sequelize.define(alias, cols, config);

Usuario.associate = (models) => {

    Usuario.hasMany(models.producto, {
        as: 'productos',
        foreignKey: 'FKcreador'
    }),
    Usuario.hasMany(models.venta, {
        as : 'ventas',
        foreignKey : 'FKusuario'
    })
}

return Usuario
}