const express = require('express');
const app = express();
const cors = require('cors'); 
app.use(cors());
app.use(express.urlencoded({extented:true}));

app.post('/login',(req,res)=>{
    const username = req.body.uname;
    res.send(username);

});

app.listen(3000,()=>{
    console.log('Server Is Running');
}
)