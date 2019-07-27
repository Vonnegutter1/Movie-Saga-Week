const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

router.get('/', (req, res) => {
    console.log('In Router GET in movie ROUTER<------------------')
    const sqlText = `SELECT * FROM "movies";`;
    pool.query(sqlText)
        .then((response) => {

            res.send(response.rows);
        })
        .catch((error) => {
            console.log('error')
            res.sendStatus(500)
        })
})

router.get('/:id', (req, res) => {
    {
        const sqlText = `SELECT "genres"."name", "movie_genre"."genre.id" from "genres"
    JOIN "movie_genre" ON "movie_genre"."movie_id"=$1;`;
        pool.query(sqlText)
            .then((response) => {
                res.send(response.rows);
            })
            .catch((error) => {
                console.log(`Error selecting movie genre.`, error);
                res.sendStatuts(500);
            })

        }})

module.exports = router;
