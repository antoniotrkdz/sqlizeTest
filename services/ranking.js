const { sequelize } = require('../app.js')
const student = require('../models/student.js')


const getRandomTwoStudents = async () => {
  const allStudents = async () => await sequelize.models.user.findAll()

  return allStudents
    .filter(student => student.points > 50 && student.points < 450) 
}