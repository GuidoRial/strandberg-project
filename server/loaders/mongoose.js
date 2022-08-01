const mongoose = require('mongoose');
const config = require('../config');

module.exports = async () => {
  const dbUri = config.mongodb.uri;

  const dbConnection = await mongoose.connect(dbUri);

  console.log('Database connected!');

  return dbConnection;
}