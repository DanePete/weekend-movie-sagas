const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

router.get('/', (req, res) => {
  // Add query to get all genres
  const query = `SELECT * FROM movies ORDER BY "title" ASC`;
  pool.query(query)
    .then( result => {
      console.log('yay', result.rows);
      res.send(result.rows);
    })
    .catch(err => {
      console.log('nay :(');
      console.log('ERROR: Get all movies', err);
      res.sendStatus(500)
    })


  res.sendStatus(500)
});

module.exports = router;