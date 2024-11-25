const mongoose = require('mongoose')

async function connect() {
    try {
        mongoose.connect('mongodb://localhost:27017/blog_education_dev')
        console.log('Connected to MongoDB: successfully')
    } catch (err) {
        console.log('Connected to MongoDB: falling')
    }
}

module.exports = { connect }