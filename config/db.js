require('dotenv').config();

const mongoose = require('mongoose');


function connectDb() {
  const URL = "mongodb+srv://wShare:FOQGU9qF2NRHmE40@cluster0.ensfxjj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  mongoose.connect(URL, {useNewUrlParser: true, useUnifiedTopology: true  });
  const connection = mongoose.connection;

  // connection.once('open', () => {
  //   console.log('Database connected.');
  // }).catch(err => {
  //   console.log('Connection failed.');
  // })

  connection
    .once('open', function () {
      console.log('Database connected.');
    })
    .on('error', function (err) {
      console.log(err);
    });
}


module.exports = connectDb;

