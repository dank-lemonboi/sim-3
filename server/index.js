require('dotenv').config()
const express = require('express'),
      session = require('express-session'),
      passport = require('passport'),
      Auth0Strategy = require('passport-auth0'),
      bodyParser = require('body-parser'),
      massive = require('massive')

      const { 
        SERVER_PORT,
        DOMAIN,
        CLIENT_ID,
        CLIENT_SECRET,
        CALLBACK_URL,
        CONNECTION_STRING,
        SESSION_SECRET
    } = process.env


const app = express();
app.use(bodyParser.json())

massive(CONNECTION_STRING).then( db => {
    app.set('db', db)
} )

app.use(session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: true
}))

app.use(passport.initialize());
app.use(passport.session());

passport.use( new Auth0Strategy({
    domain: DOMAIN,
    clientID: CLIENT_ID,
    clientSecret: CLIENT_SECRET,
    callbackURL: CALLBACK_URL,
    scope: 'openid profile'
}, function(accessToken, refreshToken, extraParams, profile, done) {
    const db = app.get('db')
    db.find_user([profile.id]).then( users => {
        if(!users[0]) {
            db.create_user(profile.displayName, profile.picture, profile.id).then( newUser => {
                done(null, newUser[0].id)
            } )
        } else {
            done(null, user[0].id)
        }
    })
  }
))

passport.serializeUser( (id, done) => {
    done(null, id)
} )

passport.deserializeUser( (id, done) => {
    app.get('db').find_session_user([id]).then( user => {
        done(null, id)
    } )
    
} )

app.get('/auth', passport.authenticate('auth0'))
app.get('/auth/callback', passport.authenticate('auth0', {
    successRedirect: 'http://localhost:3009/#/dashboard',
    failureRedirect: 'http://localhost:3009/'
}))



app.listen(SERVER_PORT, () => console.log( `Server listening on port ${SERVER_PORT}...`))