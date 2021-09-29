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
    
    config = {camelCase: false, timestamps: false}; 
    
    const productos = sequelize.define(alias,cols,config)
    
    productos.associate = function (models){

        productos.hasMany(models.Seccion,{
            as : 'secciones',
            foreignKey: 'FKseccion'
        }),
        productos.hasMany(models.Categoria, {
            as : 'categorias',
            foreignKey: 'FKcategoria'
        }),
        productos.hasMany(models.Usuario, {
            as : 'usuarios',
            foreignKey: 'FKcreadores'
        }),
        productos.hasMany(models.Formato, {
            as : 'formatos',
            foreignKey: 'FKformato'
        })
        
    }

    
    return productos;
    
    }
    
    
    module.exports = productosData;