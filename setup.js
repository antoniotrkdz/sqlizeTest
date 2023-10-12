const { sequelize } = require('./app.js');

async function reset() {
  console.log('Rewrite the example database, adding some fake data.');

  await sequelize.sync({ force: true });

  await sequelize.models.Course.bulkCreate([
    {
      title: 'Git Basics',
      description: 'Git Basics',
      startDate: '12/10/2023',
      endDate: '12/11/2023'
    },
    {
      title: 'Nodejs Basics',
      description: 'Nodejs Basics',
      startDate: '12/11/2023',
      endDate: '12/12/2023'
    },
  ]);

  await sequelize.models.Instructor.bulkCreate([
    { firstName: 'Antonio', lastName: 'Trabalza', email: 'antoniotrabalza@gmail.com' },
  ]);


  await sequelize.models.Student.bulkCreate({
    firstName: 'Antonio',
    lastName: 'Trabalza',
    email: 'antoniotrabalza@gmail.com'
  });

  console.log('Done!')
}

reset()