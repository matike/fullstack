const config = require('./utils/config')
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const usersRouter = require('./controllers/users')
const loginRouter = require('./controllers/login')
const blogsRouter = require('./controllers/blogs')
const middleware = require('./utils/middleware')
const mongoose = require('mongoose')




mongoose.connect(config.MONGODB_URI, { useNewUrlParser: true })

app.use(express.static('build'))
app.use(bodyParser.json())

app.use('/api/users', usersRouter)
app.use('/api/login', loginRouter)
app.use('/api/blogs', blogsRouter)

app.use(middleware.errorHandler)

module.exports = app