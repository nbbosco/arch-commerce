function ventasData(sequelize, Datatypes){

    alias = 'venta';
    
    cols = {
      id: {
        type: Datatypes.INTEGER, 
        primaryKey: true, 
        autoIncrement: true,
        allowNull: false
      },
      cantidad : {
          type: Datatypes.INTEGER
      },
      numero_factura : {
        type: Datatypes.INTEGER
      },
      fecha : {
          type: Datatypes.DATE
      },
      vendido : {
          type: Datatypes.INTEGER
      },
      FKproducto : {
          type: Datatypes.INTEGER
      },
      precio : {
          type: Datatypes.INTEGER
      },
      FKusuario : {
          type: Datatypes.INTEGER
      }

      }
    
    config = {camelCase: false, timestamps: false}; 
    
    const ventas = sequelize.define(alias,cols,config)
    
    ventas.associate = function (modelos){
    
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