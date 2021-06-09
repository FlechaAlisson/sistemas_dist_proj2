
const { Users } = require("../model/Users");

var users = new Users()
module.exports = app =>{
    app.post('/feed/:id', (req,res) => {
        var seguindo = users.getUser(req.params.id).following
        var tweets = []
        for (let i = 0; i < seguindo.length; i++) {
            tweets.push({
                user: users.getUser(i).name,
                tweets: users.users[seguindo[i]].tweets
            })
        }
        
        try {
            res.status('200').send({feed_tweets: tweets})
        } catch (e) {
            
        }
    })
}