const mongoose = require('mongoose');
const config = require('config');
const { connectionString } = config.get('database.mongodb')

async function connectMongoDB(){
    return mongoose.connect(connectionString);
}

module.exports = {
    connectMongoDB
} 