const express = require('express');
const app = express();
app.use(express.urlencoded({extended:true}));

app.get('/',(req,res)=>{
    const data = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form action="/login" method="post">
        <input type="text" name="data1">
        <input type="text" name="data2">
        <input type="submit">
    </form>
</body>
</html>`

    res.send(data);

app.post('/login',(req,res)=>{
    const uname = 'ranganathan';
    const upass = 'ragu';

    const username = req.body.data1;
    const userpass = req.body.data2;

    if(uname===username && upass===userpass){
        res.send('Form Submitted');
    }
    else{
        res.send('unauthorized user');
    }
});

});
app.listen(3000,()=>{
    console.log('Server Is Running')

});