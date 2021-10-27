const Location = require('../models/location.model');


/** Location API Service Logic
*/
const findLocationByZip = async (searchString) => {

  if (!searchString) return null;

  return await Location.SearchByZip(searchString)

};

module.exports = {

  findLocationByZip

};