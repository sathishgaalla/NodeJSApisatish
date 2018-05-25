var http = require("http");
var dbCon = require("./dbCon.js");
var express = require('express');
var app = express();
var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

http.createServer(function(req,res){
    dbCon.query('SELECT * FROM user', function(err, results) {
        if (err) throw err
       res.end(JSON.stringify(results));
      });
}).listen(3000);