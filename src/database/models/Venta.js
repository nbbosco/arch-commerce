function ventasData(sequelize, dataTypes){

    alias = 'venta';
    
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
    
        ventas.belongsTo(models.producto, {
            as: 'productos',
            foreignKey: 'FKproducto'
      }),
        ventas.belongsTo(models.usuario, {
          as: 'usuarios',
          foreignKey: 'FKusuario'
      })
    }
    
    return ventas;
    
    }
    
    
    module.exports = ventasData;