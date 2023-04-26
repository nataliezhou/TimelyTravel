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

app.get('/get', (req,res) => { //DONE
    var string = 'SELECT * FROM Route1;'
    db.query(string, (err, result) => {
        if(err){console.log(err);}
        else{
            //console.log(result);
            res.send(result);
        }
    })
})

app.post('/addroutes', (req,res) => { //DONE
    // We can just make sure that our input is always a comma separated list with no spaces and just trim when we press insert
    console.log(req.body.query)
    var arr = req.body.query.split(',')
    var string = 'INSERT into Route1 VALUES (' + arr[0] + ', ' + arr[1] + ', ' + arr[2] + ', ' + arr[3] + ', ' + arr[4] + ', ' + arr[5] + ', ' + arr[6] + ');'
    console.log(string)
    db.query(string ,(err, result) => { 
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

app.post('/deleteroutes', (req,res) => { // /:var //DONE
    //console.log(req.params.var)
    //var condition = req.params.var;
    var condition = req.body.query
    console.log(req.body.query)
    var string = 'DELETE FROM Route1 WHERE ' + condition + ';';
    console.log(string)
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

app.put('/editroutes', (req,res) => { //DONE
    // GET a and b from input bar
    
    var arr = req.body.query.split(',')
    console.log(arr)
    console.log(arr[0])
    console.log(arr[1])
    var string = 'UPDATE Route1 SET ' + arr[0] + ' WHERE ' + arr[1] + ';';
    console.log(string)
    console.log(typeof string)
    db.query(string, [] ,(err,result) => { 
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

app.post('/searchroutes', (req,res) => { //DONE
    console.log(req.body.query);
    var string = 'SELECT * FROM Route1 WHERE ' + req.body.query + ';'
    db.query(string, (err, result) => {
        if(err){console.log(err);}
        else{
            console.log(result);
            res.send(result);
        }
    })
})

app.post('/aq1', (req,res) => {
    console.log(req.body.query);
    var string = 'SELECT trip_id FROM StopTemp NATURAL JOIN StopTimeTemp NATURAL JOIN TripTemp WHERE stop_name = \'%Santana%\' UNION SELECT trip_id FROM Route1 NATURAL JOIN TripTemp WHERE agency_id = 1;'
    db.query(string, (err, result) => {
        if(err){console.log(err);}
        else{
            console.log(result);
            res.send(result);
        }
    })
})

app.post('/aq2', (req,res) => {
    console.log(req.body.query);
    var string = 'SELECT stop_id, COUNT(trip_id) as count FROM StopTemp NATURAL JOIN StopTimeTemp NATURAL JOIN TripTemp WHERE stop_name LIKE \'Av.%\' GROUP BY stop_id HAVING count >= 4;'
    db.query(string, (err, result) => {
        if(err){console.log(err);}
        else{
            console.log(result);
            res.send(result);
        }
    })
})


app.post('/procedure', (req,res) => { //DONE
    // We can just make sure that our input is always a comma separated list with no spaces and just trim when we press insert
    var string = "CALL Result"
    db.query(string ,(err, result) => { 
        if(err){console.log(err);}
        else{
            console.log("arrived");
            console.log(result);
            res.send(result);

            // var string2 = 'SELECT * FROM Route1;'
            // db.query(string2, (err, result) => {
            //     if(err){console.log(err);}
            //     else{
            //         console.log(result);
            //         res.send(result);
            //     }
            // })
        }
    })
})
