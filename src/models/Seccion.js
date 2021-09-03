function seccionesData(sequelize, Datatypes){

    alias = 'secciones';
    
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
    
    const secciones = sequelize.define(alias,cols,config)
    
    secciones.associate = function (modelos){
    
        secciones.hasMany(models.Producto, {
            as: 'productos',
            foreignKey: "FKseccion"
      });
    }
    
    return secciones;
    
    }
    
    
    module.exports = seccionesData;