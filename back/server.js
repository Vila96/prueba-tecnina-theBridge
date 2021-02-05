//Modules
const express = require("express");
const cors = require("cors")
const mysql = require("mysql");
const bodyParser    = require("body-parser");

//Init backend
const app = express();

const port = process.env.PORT || 8888;
app.listen(port)

app.use(cors());
app.use(bodyParser.json());

//Db connection
const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "store",
    port: "3306"
});

connection.connect((err) => {
    if(err) {
        console.log(err)
    }
    else {
        console.log("connected")
    }
});

console.log("App is listening on port " + port);

//////////////////////////////////////////////////// Endpoints ////////////////////////////////////////////////////

app.get("/getTest", (req, res) => {
    connection.query("SELECT * FROM articulos", 
        (err, result) => {
            if (err) {
                console.log(err)
            } else {
                res.send(result)

            }
        });
        connection.end
})

