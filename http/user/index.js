const user = require("express").Router()
const User = require(`${__dirname}/detail`)

const AuthMiddleware = require(`${__root}/http/express-auth-middleware`);
const LoginMiddleware = require(`${__root}/http/check-login`);

user.get("/", AuthMiddleware("ALL"), User.list);
user.get("/:id", AuthMiddleware("ALL"), User.detail);

user.put("/", User.create);

user.post("/login", LoginMiddleware(),  User.login);

user.post("/change-password", AuthMiddleware("ALL"), User.changePassword)

// user.post("/:id", AuthMiddleware, User.update);
// user.delete("/:id", AuthMiddleware, User.remove);

module.exports = user
