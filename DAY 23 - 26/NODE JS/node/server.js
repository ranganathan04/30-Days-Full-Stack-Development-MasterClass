const http = require('http');
const path = require('path');
const multer = reqire('multer');

const storage = multer.diskStorage({
    destination: path.join('c:','node','uploads'),
    filename: (req, file, cb) => cb(nullll, file.originalname)
});
const uploadForm = ` 
<html>
<head><title>upload image</title></head>
<body>
    <form action="/upload" method="post" enctype="multipart/form-data">
        <input type="file" name="image" reqired />
        <button type="submit"> Upload Image</button>
    </form>
</body>
</html>

`;

const server = http.createServer((req,res) => {
    if(req.method === 'GET'){
        res.writeHead(200, { 'Content-Type': 'text/html'});
        res.end(uploadform);
    }else if(req.method === 'POST' && req.url === '/upload'){
        upload.single('image')(req, res, (err) => {
            if (err) {
                res.writeHead(500, {'Content-Type': 'text/plaoin'});
                res.end('Error uploading file');
            } else {
                res.writeHead(200, {'Content-Type': 'text/plaoin'});
                res.end('Image upload successfully');               
            }
        });
    } else {
        res.writeHead(404, {'Content-Type':'text/plain'});
        res.end("Not Found")
    }


});


server.listen(3000, () => {
    console.log('Server running at http://localhost:300-');

});