const { DataTypes } = require('sequelize')

module.exports = (sequelize) => {
  sequelize.define('recipe', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    timeToMake: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    servings: {
      type: DataTypes.INTEGER
    },
    image: {
      type: DataTypes.STRING
    }
  })
}
