const mongoose = require('mongoose');

console.log(process.env.DATABASE_URL)
mongoose.connect(`${process.env.DATABASE_URL || process.env.REACT_APP_DATABASE_URL}`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);

const db = mongoose.connection;

db.once('connected', () => {
  console.log(`Connected to MongoDB ${db.name} at ${db.host}:${db.port}`);
});