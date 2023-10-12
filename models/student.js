
const { DataTypes } = require('sequelize')

module.exports = sequelize => {
  sequelize.define('Student', {
    //sequential id is omitted as it is created by default
    studentId: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    points: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
      allowNull: false
    }
  })
}