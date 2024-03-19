const express = require('express');
const app = express();
const path = require('path');



app.use(express.static('public'));
const connectDb = require('./config/db');
const router = require('./routes/files');
connectDb();

// Temlate Engine 
app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'ejs');
app.use(express.json());



app.use('/api/files', require('./routes/files'));
app.use('/files', require('./routes/show'));
app.use('/files/download', require('./routes/download'));

app.listen(3000, () => {
  console.log('Listening on port 3000');
})

