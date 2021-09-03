module.exports = function(sequelize, DataTypes) {
    const alias = "Usuario"
    const cols = {
        id: {
            type:DataTypes.INTEGER(10).UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        password: {
            type: DataTypes.STRING(100),
            allowNull: false
        }
    }
    const config = {
        tableName: "usuario",
        timestamp: true,
}
const Usuario = sequelize.define(alias, cols, config);

Uauario.associate = (models) => {

    Usuario.hasMany(models.Nota, {
        as: 'notas',
        foreignKey: 'usuario_FK'
    })
}

return Usuario
}