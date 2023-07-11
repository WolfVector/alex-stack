const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require("cors")

const session = require('express-session');
const passport = require('passport');

dotenv.config()

const app = express()

/* Setup middlewares */
app.use(cookieParser());

/* Session middleware  */
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false, //Only save the session to the store if the session have been modified
    saveUninitialized: false, // Don't save unitilizaded sessions
    cookie: {
        path: '/', // Global path, i.e, all pages can access this cookie
        secure: false, // The cookie can be send over http
        httpOnly: true, // Client code will not allow to access or modify the cookie
        maxAge: 3600000 // an hour
    }
}))
app.use(passport.authenticate('session'))

app.use(express.json()) //Middleware for apis, for example when using fetch from the client.

/* CORS */
app.use(cors({ 
    /* 
        Access-Control-Allow-Origin: http://localhost:5173 
        With this header, the server allows request coming from the domain defined above.
        Other domains will be denied.
    */
    origin: "http://localhost:5173", //Allow request made by this origin, our frontend app

    /*
        Access-Control-Allow-Credentials: true
        Allow sending the cookie to our frontend app, and expose the cookie informarion ONLY IF
        the request was made with the header "withCredentials"
    */
    credentials: true, //Allow the origin to access cookies
 }))

const authrouter = require("./routes/auth")

app.use('/auth', authrouter)

app.listen(process.env.PORT || 3000)
