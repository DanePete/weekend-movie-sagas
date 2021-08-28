const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

router.get('/', (req, res) => {
  // Add query to get all genres
  const query = `
    SELECT "genres"."name"
    FROM "movies"
    JOIN "movies_genres"
      ON "movies_genres".movie_id = "movies".id
    JOIN "genres"
      ON "genres".id = "movies_genres".genre_id 
    WHERE "movies".id = 1`
  ;
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