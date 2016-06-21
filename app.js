/**
 * Created by abc on 20/06/2016.
 */

var express=require("express");
var bodyParser=require("body-parser");

var app=express();

app.use(express.static('public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/a',function(req,res) {
    res.send("Hello TDD! can u here me?");
});

app.get('/a/b',function(req,res) {
    res.send("Hello in the World of team Affixus!")
});

app.get('/a/b/c',function(req,res) {
    res.send("We are team Affixus.")
});

app.get('/abcd',function(req,res) {
    res.send(req.query);
});

app.post('/a/b/c/d',function(req,res) {
    res.send(req.body);
});

// url for the page second.html////////////////////////////

app.get('/p',function(req,res) {
    res.send(req.query);
});


app.listen(3000,function () {
    console.log("Server 3000 is started");
});
