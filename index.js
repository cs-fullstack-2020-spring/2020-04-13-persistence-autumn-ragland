// Database Persistance with Mongo

let express = require('express');
let app = express();
let port = 8000;

// CONNECTING TO A MONGO DB DATABASE
// reference the mongoose module 
let mongoose = require('mongoose');
// create variable for mongo database connection string
let mongoDB = 'mongodb+srv://admin:C0d3Cr3w@cluster0-ueqkv.mongodb.net/cs_database_4?retryWrites=true&w=majority'
// pre-connection connection string sanity check
console.log(`Connecting at ${mongoDB}`);
// connect to database in mongo
mongoose.connect(mongoDB, {useNewUrlParser: true,  useUnifiedTopology: true });
// connection error message
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

let api = require('./routes/api');

app.use('/api', api);

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
});
