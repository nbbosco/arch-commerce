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
      FKProducto : {
          type: dataTypes.INTEGER
      },
      precio : {
          type: dataTypes.INTEGER
      },
      FKUsuario : {
          type: dataTypes.INTEGER
      }

      }
    
    config = {camelCase: false, timestamps: false}; 
    
    const ventas = sequelize.define(alias,cols,config)
    
    ventas.associate = function (models){
    
        ventas.belongsTo(models.Productos, {
            as: 'productos',
            foreignKey: 'FKProducto'
      }),
      ventas.belongsTo(models.Usuarios, {
          as: 'usuarios',
          foreignKey: 'FKUsuario'
      })
    }
    
    return ventas;
    
    }
    
    
    module.exports = ventasData;