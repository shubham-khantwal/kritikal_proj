const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');
// var urlencodedParser = bodyParser.urlencoded({ extended: false }) 
//const redis = require('redis');
const db = require('./models/statsinformation');
const app = express();

const PORT = process.env.PORT || 3000;
const REDIS_PORT  = process.env.PORT || 8000;

const sPath = path.join(__dirname,'/static/index.html');
app.use(bodyParser.json());
app.use(express.static(sPath));


// create client
//const client = redis.createClient(REDIS_PORT);



app.get('/',(req,res)=>{
 res.sendFile(sPath);
});

app.post('/',(req,res)=>{
    res.redirect('/api/add');
});
app.get('/api/redis_list',(req,res)=>{
    res.end("Will print data from redis");
});
app.get('/api/redis_info',(req,res)=>{
    res.end("Will print data from redis based on perimeter");
});
app.get('/api/redis_monitor',(req,res)=>{
    res.end("Will print data from redis");
});
app.get('/api/ping',(req,res)=>{
    res.end("Will check for the connection");
});

// lets add data to sqlite database
app.post('/api/add',(req,res)=>{
    const {connect_received , cmd_processed, ops_per_sec , rejected_connect , expired_keys ,evicted_keys,hits,misses} = req.body
    return db.create({connect_received , cmd_processed, ops_per_sec , rejected_connect , expired_keys ,evicted_keys,hits,misses})
    .then((stats)=>res.send(stats))
    .catch((err)=>{
        console.log('*** There is an error ***', JSON.stringify(stats));
        return res.status(400).send(err);
    })
});
//lets remove the data
app.post('/api/del/:id',(req,res)=>{
    const id = parseInt(req.params.id)
    return db.findById(id)
    .then((stats)=>stats.destroy())
    .then(()=>res.send({id}))
    .catch((err)=>{
        console.log("*** Error while deleting ***");
        res.status(400).send(err);
    })
});
app.post('/api/redis/flushall',(req,res)=>{
    res.end("Redis is flushed");
});
app.post('/api/redis/flushall',(req,res)=>{
    res.end("Redis is flushed");
});

app.listen(PORT);