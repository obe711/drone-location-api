const DBconnect = require("./connection/DB");
const config = require("./config");


const iataAutoSearch = (DB, searchString) => {
  return DB.Airport.iataAutoSearch(searchString)
}

const autoSearch = (DB, searchString) => {
  return DB.Airport.AutoSearch(searchString)
}

const searchByZip = (DB, searchString) => {
  return DB.Location.SearchByZip(searchString);
}



(async () => {
  try {
    /* Mongoose Connection */
    const DB = await DBconnect(config.mongo.url);

    /* IATA auto complete search */
    const iataRes = await iataAutoSearch(DB, "dfw");
    console.log("Airport - iataAutoSearch", iataRes);

    /* All airports auto complete search */
    const allRes = await autoSearch(DB, "dfw");
    console.log("Airport - autoSearch", allRes);

    const zipData = await searchByZip(DB, "77375");
    console.log("Location - searchByZip", zipData);

  } catch (ex) {
    console.log("Error - Check .env if mongo url is correct")
  } finally {
    process.exit(0);
  }
})()

module.exports = {
  iataAutoSearch,
  autoSearch,
  searchByZip
}