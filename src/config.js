const dotenv = require('dotenv');
const path = require('path');

dotenv.config({ path: path.join(__dirname, '../.env') });

const envVars = process.env;

module.exports = {
  mongo: {
    url: envVars.MONGO_URL || 'mongodb://localhost:27017/locationAPI',
    options: {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
  },
  port: envVars.PORT || 3003,
  env: envVars.NODE_ENV || "development"
};