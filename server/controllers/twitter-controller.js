const { TwitterApi } = require('twitter-api-v2');

class Controller {
    static async getEwlonTweet(req, res) {
        try {
            const twitterKey = process.env.TWITTER_KEY;
            const twitterClient = new TwitterApi(`${twitterKey}`);  
            const roClient = twitterClient.readOnly;
            const {data} = await roClient.v2.userTimeline('44196397', { exclude: 'replies' });
            res.status(200).json(data);
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    }
}

module.exports = Controller;