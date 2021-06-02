const { Users, User } = require("../model/Users");

    var users = new Users()
module.exports = app =>{
    app.get('/user', (req,res) => res.send(users.getAll()))

    app.get('/user/:id', (req,res) => res.send(users.getUser(req.params.id)))


    /** FOLLOW
     * @body id => do usuário atual
     * @param  id => do usuário q ele quer se inscrever
     */
    app.post('/user/follow/:id', (req,res) => {
        try{
            users.getUser(req.params.id).toFollow(req.body.id)
            res.status('200').send({message: 'ok'})
        }catch(e){
            res.status('404').send({error_message: e.message})
        }
    })



    /**
     * UNFOLLOW
     * @body id => do usuário atual
     * @param  id => do usuário q ele quer se desinscrever
     */
     app.post('/user/unfollow/:id', (req,res) => {
        try{
            users.getUser(req.params.id).toUnfollow(req.body.id)
            res.status('200').send({message: 'ok'})
        }catch(e){
            res.status('400').send({error_message: e.message})
        }
    })

    /** TWEET
     * @body id => do usuário atual
     * @param  message => a mensagem que o mesmo queira tweetar
     */
    app.post('/user/:id/tweet', (req,res) => {
        try{
            users.getUser(req.params.id).toTweet(req.body.message)
            res.status('200').send({message: 'ok'})
        }catch(e){
            res.status('404').send({message: "alguma coisa deu errado :S"})
        }
    })

    app.post('/user', (req, res) =>{
        
        users.addUser(new User(req.body.name))
        console.log(users);
        res.status('201').json({
            status: 'ok',
            id: users.length
        })
    })
}