const { DataTypes } = require('sequelize')

module.exports = (sequelize) => {
  sequelize.define('comment', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      allowNull: false
    },
    comment: {
      type: DataTypes.TEXT
    }
  })
}
