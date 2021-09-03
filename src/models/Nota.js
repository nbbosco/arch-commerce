module.exports = function(sequelize, DataTypes) {
    const alias = "Nota"
    const cols = {
        id: {
            type:DataTypes.INTEGER(10).UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        titulo: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        texto: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        usuario_FK: {
            type: DataTypes.INTEGER(10).UNSIGNED,
            allowNull: false
        }
    }
    const config = {
        tableName: "nota",
        timestamp: true,
}
const Nota = sequelize.define(alias, cols, config);

Nota.associate = (models) => {

    Usuario.belongsTo(models.Usuario, {
        as: 'usuarios',
        foreignKey: 'usuario_FK'
    })
}

return Nota
}