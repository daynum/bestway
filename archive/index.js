const express = require('express');
const app = express();
const youtube = require('./youtube');
const path = require('path');
app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

app.get('/api/youtubeSearch', function (req, res) {
    youtube.youtubeSearch(req.query.q)
        .then(function (searchResults) {
            res.send(searchResults);
        })
})

app.get('/', function (req, res) {
    res.render('index');
})

app.listen(3000);