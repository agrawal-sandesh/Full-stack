const express = require('express')
const app = express()
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const expJwt = require('express-jwt');
app.use(bodyParser.json());
//This user arrayis used foe Mock db interactions
const users = [{
    name: "a",
    email: "a@a",
    password: "a"
}, {
    name: "b",
    email: "b@b",
    password: "b"
}]
const checkJwt = expJwt({
    secret: 'someSecret',
    algorithms: ['HS256']
});
app.post('/login', (req, res, next) => {
    let email = req.body.email
    let password = req.body.password
    let user = users.find((ele) => ele.email == email)
    if (user == undefined) {
        res.send("User doesnot exist")
    } else if (user.password != password) {
        res.send("Wrong password")
    }
    else {
        let token = jwt.sign(user, 'someSecret'); // Sigining the token
        res.json(token)
    }
}
)
app.get('/', checkJwt, (req, res) => {
    console.log(req.user);
    res.send('You are authenticated'); //Sending some response when authenticated
});
app.listen(4050);
console.log("server started at 4050");
