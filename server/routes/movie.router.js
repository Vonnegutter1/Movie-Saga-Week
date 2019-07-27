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

module.exports = router;
