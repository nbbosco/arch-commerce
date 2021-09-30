function ventasData(sequelize, dataTypes){

    alias = 'Venta';
    
    cols = {
      id: {
        type: dataTypes.INTEGER, 
        primaryKey: true, 
        autoIncrement: true,
        allowNull: false
      },
      cantidad : {
          type: dataTypes.INTEGER
      },
      numero_factura : {
        type: dataTypes.INTEGER
      },
      fecha : {
          type: dataTypes.DATE
      },
      vendido : {
          type: dataTypes.INTEGER
      },
      FKproducto : {
          type: dataTypes.INTEGER
      },
      precio : {
          type: dataTypes.INTEGER
      },
      FKusuario : {
          type: dataTypes.INTEGER
      }

      }
    
    config = {camelCase: false, timestamps: false}; 
    
    const ventas = sequelize.define(alias,cols,config)
    
    ventas.associate = function (models){
    
        ventas.belongsTo(models.Producto, {
            as: 'productos',
            foreignKey: 'FKproducto'
      }),
        ventas.belongsTo(models.Usuario, {
          as: 'usuarios',
          foreignKey: 'FKusuario'
      })
    }
    
    return ventas;
    
    }
    
    
    module.exports = ventasData;