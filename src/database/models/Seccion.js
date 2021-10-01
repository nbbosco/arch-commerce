module.exports = (sequelize, dataTypes) => {

    alias = 'seccion';
    
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
    
    const secciones = sequelize.define(alias,cols,config)
    
    secciones.associate = function (models){
    
        secciones.hasMany(models.producto, {
            as: 'productos',
            foreignKey: "FKseccion"
      });
    }
    
    return secciones;
    
    }
    
    
    // module.exports = seccionesData;