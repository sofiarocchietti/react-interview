const { DataTypes } = require('sequelize')

module.exports = (sequelize) => {
  sequelize.define('user', {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(32),
      is: /^[a-zA-Z]+(([ ][a-zA-Z ])?[a-zA-Z]*)*$/
    },
    userName: {
      type: DataTypes.STRING(32),
      unique: true,
      allowNull: false,
      is: /^[a-zA-Z]+(([ ,.-][a-zA-Z ])?[a-zA-Z]*)*$/
    },
    email: {
      type: DataTypes.STRING(32),
      unique: true,
      allowNull: false,
      is: /\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}\b/
    },
    hashedPassword: {
      type: DataTypes.STRING(64),
      allowNull: false
    }
  })
}
