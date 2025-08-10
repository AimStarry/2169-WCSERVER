const express = require('express');
const app = express();

app.use(express.static('public'));

const path = require('path');
const mime = require('mime-types');
const multer = require('multer');

// Storage configuration
const fileStorage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads');
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    },
});

// File filter to allow only images
const fileFilter = (req, file, cb) => {
    const allowedTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/webp'];

    if (allowedTypes.includes(file.mimetype)) {
        cb(null, true); // Accept file
    } else {
        cb(new Error('Only image files (JPG, PNG, GIF, WEBP) are allowed!'), false);
    }
};

const upload = multer({
    storage: fileStorage,
    fileFilter: fileFilter
});

// File upload route
app.post('/uploads', upload.single('myFile'), (req, res) => {
    if (!req.file) {
        return res.status(400).send('<h2>Invalid file type. Please upload an image.</h2>');
    }

    console.log(req.file);

    req.file.mimetype = mime.lookup(req.file.originalname);
    res.sendFile(path.join(__dirname, 'file-uploaded.html'));
});

// Route to upload form
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'file-upload.html'));
});

app.listen(3000, function(){
    console.log('Server running on port 3000');
});
