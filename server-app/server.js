const express = require('express')
const cors = require('cors')
const bodyparser = require('body-parser')
const app = express()
const mysql = require('mysql')
//const fs = require('fs')


app.use(cors())
app.use(express.json())
app.use((req, res,next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
});

app.listen(4000, () => {
    console.log('Port 4000 running');
})

const db = mysql.createPool({
    host:  '35.238.215.204', //ip address to gcp
    user: 'root', //username to gcp
    password: 'cs411ttk', //password to gcp
    database: 'TTK'
});

app.get('/get', (req,res) => {
    var string = 'SELECT * FROM Route1;'
    //console.log(req.body.query)
    db.query(string, (err, result) => {
        if(err){console.log(err);}
        else{
            console.log(result);
            res.send(result);
        }
    })
})

app.post('/addroutes', (req,res) => {

    // TODO(): get 7 values from comma separated input bar input and put it into string
    // We can just make sure that our input is always a comma separated list with no spaces and just trim when we press insert
    var string = 'INSERT into Route1 VALUES (?, ?, ? , ?, ?, ?, ?);'
    console.log(req.body.query)
    db.query(string, [] ,(err, result) => { //TODO(): fill the [] with the 7 variables equal to the 7 input values and put them into string
        if(err){console.log(err);}
        else{
            console.log("arrived");
            console.log(result);

            var string2 = 'SELECT * FROM Route1;'
            db.query(string2, (err, result) => {
                if(err){console.log(err);}
                else{
                    console.log(result);
                    res.send(result);
                }
            })
        }
    })
})

app.delete('/deleteroutes/:var', (req,res) => {
    console.log(req.params.var)
    var condition = req.params.var;
    var string = 'DELETE FROM Route1 WHERE ' + condition + ';';
    db.query(string, (err,result) => {
        if(err){console.log(err);}
        else{
            var string2 = 'SELECT * FROM Route1;'
            db.query(string2, (err, result) => {
                if(err){console.log(err);}
                else{
                    console.log(result);
                    res.send(result);
                }
            })
        }
    })
})

app.put('/editroutes', (req,res) => {
    // GET a and b from input bar

    //TODO(): Get input from input bar and turn it into 2 values from a comma separated list
    var string = 'UPDATE Route1 SET ? WHERE ?;';
    console.log(req.body.query)
    db.query(string, [] ,(err,result) => { //TODO(): Put the values from the comma separated list and put them into the empty [] brackets and put it into string
        if(err){console.log(err);}
        else{
            var string2 = 'SELECT * FROM Route1;'
            db.query(string2, (err, result) => {
                if(err){console.log(err);}
                else{
                    console.log(result);
                    res.send(result);
                }
            })
        }
    })
})

app.post('/searchroutes', (req,res) => {
    console.log(req.body.query);
    var string = 'SELECT FROM Route1 WHERE' + req.body.query + ';'
    db.query(string, (err, result) => {
        if(err){console.log(err);}
        else{
            console.log(result);
            res.send(result);
        }
    })
})

