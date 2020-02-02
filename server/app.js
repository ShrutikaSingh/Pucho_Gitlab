const express = require('express')
const server = express();
const cors = require('cors');
const fileUpload = require('express-fileupload');
const mongoose = require('mongoose');
const {mongoDbUrl, PORT} = require('./config/configuration');
const path = require('path');
var corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200,
}

server.use(cors(corsOptions));

/* Configure express*/
server.use(express.json());
server.use(express.urlencoded({extended: true}));
server.use(express.static(path.join(__dirname, 'public')));


mongoose.connect(mongoDbUrl, { useNewUrlParser: true })
    .then(response => {
        console.log("MongoDB Connected Successfully.");
    }).catch(err => {
        console.log("Database connection failed.");
});



const defaultRoutes = require('./routes/adminRoutes');

server.get('/', (req, res) => {
  res.send('Hello World!')
});








server.listen(8000, () => {
  console.log('Example app listening on port 8000!')
});
