const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

router.get('/', (req, res) => {
   
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
//------------------DETAILS ROUTER GET TO GET DETAILS----------------
router.get('/:id', (req, res) => {
    
        let movieId = req.params.id;
        const sqlText = `SELECT movies.title, movies.description, genres.name, movies.id
        FROM "movie_genres"
        JOIN "movies" ON "movies"."id" = "movie_genres"."movie_id"
        JOIN "genres" ON "genres"."id" = "movie_genres"."genre_id"
        WHERE "movies"."id" = $1;`;;
        const values = [movieId]
        pool.query(sqlText, values)
            .then((response) => {
                res.send(response.rows[0]);
            })
            .catch((error) => {
                console.log(`Error selecting movie genre.`, error);
                res.sendStatuts(500);
            })
    
})


router.put('/update/:id', (req, res) => {

    console.log('UPDATING MOVIES ROUTER--------------------------------------------------------------', req.body)

    const sqlText = `UPDATE "movies" SET "title" = $1, "description" = $2 WHERE "id" = $3;`;
    values = [req.body.name, req.body.description, req.body.id]
    pool.query(sqlText, values)
    .then((response)=> {
        res.sendStatus(200);
    })
    .catch((error) => {
        res.sendStatus(500);
    })
})

module.exports = router;
