const express = require('express');
app = express();

app.use(express.static('public'));

//import statements for path, mimetype, and multer
const path = require('path');
const mime = require('mime-types');
const multer = require('multer');

//use multer to support file upload feature
const fileStorage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads');
    },

    filename: function(req, file, cb) {
        cb(null, file.originalname); //use the original filename
    },
});

const upload = multer({ storage:fileStorage});

//file upload route
app.post('/uploads', upload.single('myFile'), (req, res) => {
    console.log(req.file);
    //set the correct MIME type for the uploaded file,
    //use to verify that the uploaded file is of the expected
    //type before further processing it
    req.file.mimetype = mime.lookup(req.file.originalname);

    //send a customized page to the client
    res.sendFile(path.join(__dirname, 'file-uploaded.html'));
});

//route to upload
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/' + 'file-upload.html')
});

app.listen(3000, function(){
    console.log('Server running on port 3000');
});