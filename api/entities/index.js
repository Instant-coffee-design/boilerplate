const mongoose = require('mongoose')

const User = require('./user')

mongoose.connect(process.env.MONGO, { useNewUrlParser: true, useUnifiedTopology: true })

exports.user = User