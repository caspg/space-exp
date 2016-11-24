const dbUri = 'mongodb://localhost:27017/space-exp';
const mongoose = require('mongoose');

mongoose.Promise = Promise;

const initializeDb = () => {
  mongoose.connect(dbUri);

  const db = mongoose.connection;

  db.on('error', console.error.bind(console, 'connection error'));
  db.on('close', () => { console.log('bye bye!') });
  db.once('open', () => {
    console.log('yay, connected');
  });
}

module.exports = initializeDb;
