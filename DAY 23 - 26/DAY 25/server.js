const http = require("http");
const fs = require("fs");

const backend = http.createServer((req,res) => {
    if(req.method==='GET' && req.url==='/kitkat'){
        res.statusCode = 200;
        res.setHeader('Content-Type','text/plain');
        res.end("KitKat");
    }else if (req.method==='get' && req.url==="/munch"){
        const readfile = ()=>{
            return fs.readFileSync('text.txt','utf-8');
        }
        
        const data = readFile();
        res.end(data);
    }

});

backend.listen(5000,()=>{
    console.log("server running");
})