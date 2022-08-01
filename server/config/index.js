require('dotenv').config();

module.exports = {
  server: {
    port: process.env.PORT || 4000,
  },
  mongodb: {
    uri: process.env.MONGODB_URI
  },
}