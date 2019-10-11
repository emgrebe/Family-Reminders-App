const MONGO_URL = process.env.REACT_APP_DATABASE_URL;
const mongoose = require('mongoose');

  mongoose.Promise = global.Promise;
  mongoose.connect(
    MONGO_URL,
    {useNewUrlParser: true, useUnifiedTopology: true}).then(
      () => { console.log('Database is connected') },
      err => { console.log('Cannot connect to the databaqse' + err) }
    );
  
  const db = mongoose.connection;
  
  db.once('connected', () => {
    console.log(`Connected to MongoDB ${db.name} at ${db.host}:${db.port}`);
  })
