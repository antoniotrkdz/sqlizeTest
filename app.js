const PORT = 8080;
const { Sequelize } = require('sequelize')
const sequelize = new Sequelize('postgres://enrolladmin:enrolled@localhost:5432/enrollment')
const express = require('express')
const app = express()

const routes = {
  ranking: require('./routes/ranking.js'),
}

app.use('/api/v1/ranking', routes.ranking)

async function init() {
  try {
    await sequelize.authenticate()
    console.log('Connection has been established successfully.')
    module.exports = { sequelize }
    app.listen(PORT, () => {
		console.log(`Express server started on port ${PORT}.`)
	});

  } catch (error) {
    console.error('Unable to connect to the database:', error)
		process.exit(1)
  }
}

init()
