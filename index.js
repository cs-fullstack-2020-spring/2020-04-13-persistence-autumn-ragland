// Database Persistance with Mongo

// reference express module
let express = require('express');
// create server
let app = express();
// port variable
let port = 8000;

// CONNECTING TO A MONGO DB DATABASE
// reference the mongoose module 
let mongoose = require('mongoose');
// connect to database
let mongoDB = 'mongodb+srv://admin:C0d3Cr3w@cluster0-ueqkv.mongodb.net/cs_database_4?retryWrites=true&w=majority'
mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true});
// connection error message
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// reference api routes module
let api = require('./routes/api');
// mount api routes
app.use('/api', api);

// server ready on port
app.listen(port, () => {
    console.log(`Listening on port ${port}`)
});
