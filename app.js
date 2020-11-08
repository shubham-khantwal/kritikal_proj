const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');
var urlencodedParser = bodyParser.urlencoded({ extended: false }) 
const app = express();

const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(express.static(__dirname+'/page.html'));

const fPage = path.resolve(__dirname+"../redis-monitor/app/templates/index_page.html");

app.get('/',(req,res)=>{
 res.end("FRONT-PAGE")
});

app.get('/api/redis_list',(req,res)=>{

});
app.get('/api/redis_info',(req,res)=>{


});
app.get('/api/redis_monitor',(req,res)=>{


});
app.get('/api/ping',(req,res)=>{


});

app.post('/api/add',(req,res)=>{
    
});
app.post('/api/del',(req,res)=>{

});
app.post('/api/redis/flushall',(req,res)=>{

});


app.listen(port);