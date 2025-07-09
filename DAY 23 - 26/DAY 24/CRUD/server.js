const fs = require('fs');

const createFile = ()=>{
    const htmlFile = `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>hello there</h1>
</body>
</html>
    `
    fs.writeFileSync('datd.html',htmlFile,'utf-8');
    console.log("created");
}
const readFile = ()=>{
    const datd = fs.readFileSync('datd.txt','utf-8');
    console.log(datd);
}

const updateFile = ()=> {
    fs.appendFileSync('datd.txt','This Is Updated Data','utf-8');
    console.log("Updated");
}

const deleteFile = ()=>{
    fs.unlinkSync('datd.txt');
    console.log("Deleted");

}
// deleteFile();

// updateFile();

// readFile();

createFile();