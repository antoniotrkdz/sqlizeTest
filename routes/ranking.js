const express = require('express')
const router = express.Router()
// const getRanking = require('./services/rankingService.js')

router.get('/', async (req, res) => {
  // const rankings = await getRanking()
  if (rankings) {
    res.json(rankings)
  } else {
    res.json('No students found with ranking between 50 and 450')
  }
})

module.exports = router