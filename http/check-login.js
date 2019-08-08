const Client = require("qgrail-broker").Client;
const AuthClient = new Client(process.env.BROKER_HOST, "authentication2");

module.exports = () => {
  return (req, res, next)=> {
    const user = req.body;
    AuthClient.invoke("user/login",user)
      .then((payload)=> {
        console.log("masuk gak", payload.name)
        if (payload.name==="Error") {
          next()
        }
        else {
          res.success({
            payload
          })
        }
      })
      .catch(err=> {
        console.log('ini error>>>>>>>>>>>>>')
        next()
      })
  }
};
