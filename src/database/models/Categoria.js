function categoriasData(sequelize, dataTypes){

    alias = 'categoria';
    
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
    
        categorias.hasMany(models.producto, {
            as: 'productos',
            foreignKey: "FKcategoria"
      });
    }
    
    return categorias;
    
    }
    
    
    module.exports = categoriasData;
