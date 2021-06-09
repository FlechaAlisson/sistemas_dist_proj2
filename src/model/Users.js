var User = class User {
    constructor(name) {
        this.name = name
        this.tweets = []
        this.following = []
    }

    toFollow(userToFollow) {
        if (!this.following.includes(userToFollow)) {
            this.following.push(userToFollow)
        } else {
            throw new Error('Você já segue essa pessoa')
        }

    }

    toTweet(tweet) {
        this.tweets.push(tweet)
    }

    toUnfollow(userToUnfollow) {
        if (this.following.includes(userToUnfollow)) {
            this.following = this.following.filter((e) => e != userToUnfollow)
        } else {
            throw new Error('Você não segue essa pessoa')
        }

    }
}

var Users = class Users {
    constructor() {
        this.users = [
            new User("João"),
            new User("Claúdia"),
            new User("Natiele")
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
