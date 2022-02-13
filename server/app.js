require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const tweetController = require('./controllers/twitter-controller');

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.get('/', tweetController.getEwlonTweet);

app.listen(port, () => {
    console.log(`Elon Tweets at http://localhost:${port}`)
})