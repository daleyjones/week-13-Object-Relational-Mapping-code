const { Model,  Sequelize, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');
// const { DataTypes } = require('sequelize');

class ProductTag extends Model {}

ProductTag.init(
  {
    id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    product_id: {
      type:  Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'product',
        key: 'id',
    
      },
  },

tag_id: {
    type:  Sequelize.INTEGER,
    allowNull: false,
    references: {
      model: 'tag',
      key: 'id',
  
    },
  },
},
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product_tag',
  }
);

module.exports = ProductTag;
