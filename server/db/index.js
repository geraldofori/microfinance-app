const MongoClient = require('mongodb').MongoClient;

require('dotenv').config()

const uri = `mongodb+srv://${process.env.DB_USERNAME}:microfinance@cluster0.sqqtv6f.mongodb.net/?retryWrites=true&w=majority`;
MongoClient.connect(uri, { useNewUrlParser: true }, (err, client) => {
    if (err) {
        console.error("MongoDB connection error:", err);
    } else {
        console.log("Connected to MongoDB!");
    }
});