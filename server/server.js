const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 5000;
const movieRouter = require('./routes/movie.router') 

/** ---------- MIDDLEWARE ---------- **/
app.use(bodyParser.json()); 
app.use(express.static('build'));

/** ---------- ROUTES ---------- **/
app.use('/list', movieRouter)

/** ---------- START SERVER ---------- **/
app.listen(port, function () {
    console.log('Listening on port: ', port);
});