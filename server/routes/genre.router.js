const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

router.get('/:id', (req, res) => {
  const movieId = req.query;
  console.log('genre movie id is', movieId);
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
      res.send(result.rows);
    })
    .catch(err => {
      console.log('ERROR: Get all movies GENRE', err);
      res.sendStatus(500)
    })
});

router.get('/', (req, res) => {
  const sqlQuery = `SELECT "name" FROM "genres"`
  pool.query(sqlQuery).then(dbRes => {
    res.send(dbRes.rows);
  }).catch(error => {
    console.log('Failed to get all the genres');
    res.sendStatus(500);
  })
});

module.exports = router;