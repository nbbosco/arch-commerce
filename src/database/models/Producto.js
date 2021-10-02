function productosData(sequelize, dataTypes){

    alias = 'Productos';
    
    cols = {
      id: {
        type: dataTypes.INTEGER, 
        primaryKey: true, 
        autoIncrement: true,
        allowNull: false
      },
      nombre: {
        type: dataTypes.STRING(255),
        allowNull: false
      },
      descripcion : {
        type: dataTypes.STRING(255)
      },
      imagen : {
        type: dataTypes.STRING(255),
        allowNull: false
      },
      precio : {
          type: dataTypes.INTEGER,
          allowNull: false
      },
      FKseccion : {
          type: dataTypes.INTEGER,
          defaultValue: "2"
      },
      FKcategoria : {
          type: dataTypes.INTEGER,
          allowNull: false
      },
      fechaDeCreacion : {
          type: dataTypes.DATE
      },
      creador : {
          type: dataTypes.STRING(255),
          allowNull: false
      },
      FKformato : {
          type: dataTypes.INTEGER,
          defaultValue: "1"
      },
      FKcoleccionista : {
          type: dataTypes.INTEGER
    }
    }
    
    config = {camelCase: false, timestamps: false}; 
    
    const productos = sequelize.define(alias,cols,config)
    
    productos.associate = function (models){

        productos.belongsTo(models.Seccion,{
            as : 'secciones',
            foreignKey: 'FKseccion'
        }),
        productos.belongsTo(models.Categorias, {
            as : 'categorias',
            foreignKey: 'FKcategoria'
        }),
        productos.belongsTo(models.Usuarios, {
            as : 'usuarios',
            foreignKey: 'FKcoleccionista'
        }),
        productos.belongsTo(models.Formatos, {
            as : 'formatos',
            foreignKey: 'FKformato'
        })
        productos.hasMany(models.Venta, {
            as : 'ventas',
            forgeinKey: 'FkProducto'
        })
        
    }

    
    return productos;
    
    }
    
    
    module.exports = productosData;