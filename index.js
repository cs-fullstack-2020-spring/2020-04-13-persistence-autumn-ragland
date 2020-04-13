// Database Persistance with Mongo

let express = require('express');
let app = express();
let port = 8000;

let mongoose = require('mongoose');
let mongoDB = 'mongodb+srv://admin:C0d3Cr3w@cluster0-ueqkv.mongodb.net/cs_database_4?retryWrites=true&w=majority'
console.log(`Connecting at ${mongoDB}`);
mongoose.connect(mongoDB, {useNewUrlParser: true,  useUnifiedTopology: true });
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

let api = require('./routes/api');

app.use('/api', api);

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
});
