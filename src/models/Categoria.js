function categoriasData(sequelize, Datatypes){

    alias = 'categorias';
    
    cols = {
      id: {
        type: Datatypes.INTEGER, 
        primaryKey: true, 
        autoIncrement: true,
        allowNull: false
      },
      nombre: {
        type: Datatypes.STRING(100),
        allowNull: false
      },
      }
    
    config = {camelCase: false, timestamps: false}; 
    
    const categorias = sequelize.define(alias,cols,config)
    
    categorias.associate = function (modelos){
    
        categorias.belongsTo(models.Producto, {
            as: 'productos',
            foreignKey: "FKcategoria"
      });
    }
    
    return categorias;
    
    }
    
    
    module.exports = categoriasData;
