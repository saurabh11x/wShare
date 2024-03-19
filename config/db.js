require('dotenv').config();

const mongoose = require('mongoose');


function connectDb() {
  mongoose.connect(process.env.MONGO_CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true  });
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

