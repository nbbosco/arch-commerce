'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   return queryInterface.createTable('nota', {
       id: {
           type: Sequelize.DataTypes.INTEGER(10).UNSIGNED,
           allowNull: false,
           primaryKey: true,
           autoIncrement: true
       },
       titulo: {
           type: Sequelize.DataTypes.STRING(100),
           allowNull: false
       },
       texto: {
           type: Sequelize.DataTypes.TEXT,
           allowNull: false
       },
       usuario_FK: {
         type: Sequelize.DataTypes.INTEGER(10).UNSIGNED,
         references : {
           model: 'usuario',
           key: 'id'
         }
       },
       createAt: {type: Sequelize.DataTypes.DATE},
       updateAt: {type: Sequelize.DataTypes.DATE}
   })
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('nota')
  }
};