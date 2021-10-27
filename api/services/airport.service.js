const { Airport } = require('../models/airport.model');


/** Airport API Service Logic
*/
const findAirportByString = async (searchString) => {

  if (!searchString) return [];

  return await Airport.iataAutoSearch(searchString);

};

module.exports = {

  findAirportByString

};