function formatosData(sequelize, dataTypes){

    alias = 'Formato';
    
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
    
    const formatos = sequelize.define(alias,cols,config)
    
    formatos.associate = function (models){
    
        formatos.belongsTo(models.Productos, {
            as: 'productos',
            foreignKey: "FKformato"
      });
    }
    
    return formatos;
    
    }
    
    
    module.exports = formatosData;
