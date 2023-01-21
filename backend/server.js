// Modules and Globals
require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express();
const defineCurrentUser = require('./middleware/defineCurrentUser')


// Express Settings
app.use(cors())
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(defineCurrentUser);

// Controllers & Routes
app.use(express.urlencoded({ extended: true }))
const usersRouter = require('./controllers/users');
app.use('/users', usersRouter);
app.use('/authentication', require('./controllers/authentication'));
app.use('/breweries', require('./controllers/breweries'));

console.log("server")


// Listen for Connections
app.listen(process.env.PORT, () => {
    console.log(`Listening on ${process.env.PORT}`)
})
