function formatosData(sequelize, Datatypes){

    alias = 'formatos';
    
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
    
    const formatos = sequelize.define(alias,cols,config)
    
    formatos.associate = function (modelos){
    
        formato.belongsTo(models.Producto, {
            as: 'productos',
            foreignKey: "FKformato"
      });
    }
    
    return formatos;
    
    }
    
    
    module.exports = formatosData;
