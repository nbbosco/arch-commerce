function productosData(sequelize, Datatypes){

    alias = 'productos';
    
    cols = {
      id: {
        type: Datatypes.INTEGER, 
        primaryKey: true, 
        autoIncrement: true,
        allowNull: false
      },
      nombre: {
        type: Datatypes.STRING(255),
        allowNull: false
      },
      descripcion : {
        type: Datatypes.STRING(255)
      },
      imagen : {
        type: Datatypes.STRING(255),
        allowNull: false
      },
      precio : {
          type: Datatypes.INTEGER,
          allowNull: false
      },
      FKseccion : {
          type: Datatypes.INTEGER,
          allowNull: false
      },
      FKcategoria : {
          type: Datatypes.INTEGER,
          allowNull: false
      },
      fecha_de_creacion : {
          type: Datatypes.DATE
      },
      FKcreador : {
          type: Datatypes.INTEGER,
          allowNull: false
      },
      FKformato : {
          type: Datatypes.INTEGER
      }
    }
    
    config = {camelCase: false, timestamps: false}; 
    
    const productos = sequelize.define(alias,cols,config)
    
    productos.associate = function (modelos){

        productos.belongsTo (models.Seccion,{
            as : 'secciones',
            foreignKey: 'FKseccion'
        }),
        productos.belongsTo (models.Categoria, {
            as : 'categorias',
            foreignKey: 'FKcategoria'
        }),
        productos.belongsTo (models.Usuario, {
            as : 'usuarios',
            foreignKey: 'FKcreadores'
        }),
        productos.belongsTo (models.Formatos, {
            as : 'formatos',
            foreignKey: 'FKformato'
        })
        
    }

    
    return productos;
    
    }
    
    
    module.exports = productosData;