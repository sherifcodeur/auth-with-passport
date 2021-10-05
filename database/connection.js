
// importing mongoose for managing mongdb
const mongoose = require('mongoose');


// database connection (MongoDB)


// URI of the mongo db - stored in env file
const dbURI = process.env.MONGODB_URL;


// sonnectiong to the database
const dbconnect = mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => console.log("connected to Database"))
  .catch((err) =>{

    console.log('connection to db problem')
      
    throw new Error(err);

  }).catch( e => { console.error(e) })




module.exports = dbconnect;