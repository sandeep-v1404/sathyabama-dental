const express = require('express');
const app = express();

const cookieParser = require('cookie-parser')
const fileUpload = require('express-fileupload')
    // const dotenv = require('dotenv');
const path = require('path')

const errorMiddleware = require('./middlewares/errors')

// Setting up config file 
if (process.env.NODE_ENV !== 'PRODUCTION') require('dotenv').config({ path: 'backend/config/config.env' })
    // dotenv.config({ path: 'backend/config/config.env' })

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser())
app.use(fileUpload());


// Import all routes
const patients = require('./routes/patient');
const auth = require('./routes/auth');

app.use('/api/sdh', patients);
app.use('/api/sdh', auth);

if (process.env.NODE_ENV === 'PRODUCTION') {
    app.use(express.static(path.join(__dirname, '../frontend/build')))

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, '../frontend/build/index.html'))
    })
}


// Middleware to handle errors
app.use(errorMiddleware);

module.exports = app