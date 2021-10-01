function productosData(sequelize, dataTypes){

    alias = 'producto';
    
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
          allowNull: false
      },
      FKcategoria : {
          type: dataTypes.INTEGER,
          allowNull: false
      },
      fecha_de_creacion : {
          type: dataTypes.DATE
      },
      FKcreador : {
          type: dataTypes.INTEGER,
          allowNull: false
      },
      FKformato : {
          type: dataTypes.INTEGER
      }
    }
    
    config = {camelCase: false, timestamps: false, tableName: 'producto'}; 
    
    const productos = sequelize.define(alias,cols,config)
    
    productos.associate = function (models){

        productos.belongsTo(models.seccion,{
            as : 'secciones',
            foreignKey: 'FKseccion'
        }),
        productos.belongsTo(models.categoria, {
            as : 'categorias',
            foreignKey: 'FKcategoria'
        }),
        productos.belongsTo(models.usuario, {
            as : 'usuarios',
            foreignKey: 'FKcreador'
        }),
        productos.belongsTo(models.formato, {
            as : 'formatos',
            foreignKey: 'FKformato'
        }),
        productos.hasMany(models.venta, {
            as : 'ventas',
            foreignKey: 'FKproducto'
        })
        
    }

    
    return productos;
    
    }
    
    
    module.exports = productosData;