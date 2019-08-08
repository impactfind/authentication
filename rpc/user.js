const User = __shared("user")
const Validate = __lib("validator").validate("user")

module.exports.verify = function(user) {
    return Validate("verify", user)
        .then(() => User.verify(user))
}



