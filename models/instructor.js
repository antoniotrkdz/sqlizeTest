const { DataTypes } = require('sequelize')

module.exports = sequelize => {
  sequelize.define('Instructor', {
    //sequential id is omitted as it is created by default

    instructorId: {
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
    }
  })
}