// const http = require('http');
// const server = http.createServer((req,res)=>{
//     res.statuscode = 200;
//     res.setHeader('Content-Type','text/plain');
//     res.end("Server Created Successfully");
// });

// server.listen(5000,()=>{
//     console.log("Server Runs On port 5000");
// });

const http = require('http');
const fs = require('fs');
const server = http.createServer((req,res)=>{
    if(req.url=='/'){
        fs.readfile('server.html',(err,data)=>{
        if(err){
            res.statuscode=400;
            res.setHeader('Content-Type','text/plain');
            res.end("No File Found");
        }
        else{
            res.statuscode=200;
            res.setHeader('Content-Type','text/plain');~
            res.end(data);

        }
       });

    }
});




