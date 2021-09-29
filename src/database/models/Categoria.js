function categoriasData(sequelize, dataTypes){

    alias = 'Categoria';
    
    cols = {
      id: {
        type: dataTypes.INTEGER, 
        primaryKey: true, 
        autoIncrement: true,
        allowNull: false
      },
      nombre: {
        type: dataTypes.STRING(100),
        allowNull: false
      },
      }
    
    config = {camelCase: false, timestamps: false}; 
    
    const categorias = sequelize.define(alias,cols,config)
    
    categorias.associate = function (models){
    
        categorias.belongsTo(models.Productos, {
            as: 'productos',
            foreignKey: "FKcategoria"
      });
    }
    
    return categorias;
    
    }
    
    
    module.exports = categoriasData;
