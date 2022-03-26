//*REQUIRES------------------------------------------------------------------------------------------
const express = require('express');
const {VoteRouter} = require('./server/routes/voteRouter');
const path = require('path');
var cors = require('cors');
const exp = require('constants');

//*APP------------------------------------------------------------------------------------------
const app = express();
app.use(cors())
app.use( express.urlencoded({extended:true}) );
app.use( express.json() );
app.use(express.static(path.join(__dirname, "/public/dist/public")))


app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE, PUT, OPTION");
    next();
});

//*DATABASE------------------------------------------------------------------------------------------
require("./server/config/database.js");

//*ROUTES------------------------------------------------------------------------------------------
app.use( '/votes', VoteRouter );


//*REACT------------------------------------------------------------------------------------------

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../Prueba/belt/build', 'index.html'));
});

app.use(express.static(path.resolve(__dirname, '../Prueba/belt/build')));


//*PORTS----------------------------------------------------------------------------------------

//! let port = 8080
const port = process.env.PORT || 8080;

app.listen(port, function(){
    console.log("This server is working on port: 8080");
    console.log("Open your browser and hit url 'localhost:8080'");
})
