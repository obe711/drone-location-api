const DBconnect = require("./connection/DB");
const StreamObject = require('stream-json/streamers/StreamObject');
const StreamArray = require('stream-json/streamers/StreamArray');
const fs = require('fs');
const path = require('path');
const config = require('./config');

const MONGO_URL = config.mongo.url;

async function createAirportDatabase(DB) {

  /* Create path to data */
  const dataPath = path.join(__dirname, "data", "airports.json");


  /* Clear model collection */
  console.log("Clearing old airport data");
  const found = await DB.Airport.findOne({});
  if (found) await DB.Airport.deleteMany({});


  return new Promise((resolve, reject) => {
    /* Create Data stream */
    const pipeline = fs.createReadStream(dataPath)
      .pipe(StreamObject.withParser());


    /* Pipe each data object */
    pipeline.on('data', data => {

      /* Create document from object */
      DB.Airport.create(data.value);

      console.log("saved", data.key);
    });

    pipeline.on('end', () => {
      console.log('Airport loader complete');
      resolve()
    });

    pipeline.on("error", (error) => reject(error));
  })

}

async function createLocationDatabase(DB) {

  /* Create path to data */
  const dataPath = path.join(__dirname, "data", "locations.json");


  /* Clear model collection */
  console.log("Clearing old location data");
  const found = await DB.Location.findOne({});
  if (found) await DB.Location.deleteMany({});


  return new Promise((resolve, reject) => {
    /* Create Data stream */
    const pipeline = fs.createReadStream(dataPath)
      .pipe(StreamArray.withParser());


    /* Pipe each data object */
    pipeline.on('data', data => {

      /* Create document from object array */
      const { _id, ...rest } = data.value;
      DB.Location.create(rest);

      console.log("saved", data.key);
    });

    pipeline.on('end', () => {
      console.log('Location loader complete');
      resolve()
    });

    pipeline.on("error", (error) => reject(error));
  })

}

(async () => {
  try {
    /* Mongoose Connection */
    const DB = await DBconnect(MONGO_URL);
    await createAirportDatabase(DB);
    await createLocationDatabase(DB);
    console.log("Done");
  } catch (ex) {
    console.log(ex.message);
  }
})();

module.exports = {
  createAirportDatabase,
  createLocationDatabase
}



