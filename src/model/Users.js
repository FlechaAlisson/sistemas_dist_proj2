var User = class User {
    constructor(name) {
        this._name = name
        this.tweets = []
        this.followers = []
    }

    toFollow(userToFollow) {
        if (!this.followers.includes(userToFollow)) {
            this.followers.push(userToFollow)
        } else {
            throw new Error('Você já segue essa pessoa')
        }

    }

    toTweet(tweet) {
        this.tweets.push(tweet)
    }

    toUnfollow(userToUnfollow) {
        if (this.followers.includes(userToUnfollow)) {
            this.followers = this.followers.filter((e) => e != userToUnfollow)
        } else {
            throw new Error('Você não segue essa pessoa')
        }

    }
}

var Users = class Users {
    constructor() {
        this.users = [
            new User("Alisson"),
            new User("Claúdia"),
            new User("Xuxa")
        ]
        if (!!Users.instance) {
            return Users.instance;
        }

        Users.instance = this;

        return this;
    }

    addUser(user) {
        this.users.push(user)
    }

    getUser(id) {
        return this.users[id]
    }

    getAll() {
        return this.users
    }
}

module.exports = { Users, User };
