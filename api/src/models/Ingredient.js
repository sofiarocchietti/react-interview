const { DataTypes } = require('sequelize')

module.exports = (sequelize) => {
  sequelize.define('ingredient', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    amount: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    measure: {
      type: DataTypes.INTEGER
    },
    likes: {
      type: DataTypes.INTEGER
    }
  })
}
