const MongoClient = require('mongodb').MongoClient;

require('dotenv').config()

const uri = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.sqqtv6f.mongodb.net/${process.env.DB_USERNAME}?retryWrites=true&w=majority`;
MongoClient.connect(uri,  (err, client) => {
    if (err) {
        console.error("MongoDB connection error:", err);
    } else {
        console.log("Connected to MongoDB!");
    }

});

module.exports = {
    uri
};