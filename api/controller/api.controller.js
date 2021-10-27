const httpStatus = require('http-status');
const catchAsync = require('../utils/catchAsync');
const airportService = require('../services/airport.service');
const locationService = require('../services/location.service');


/** API Controller level
*/
const getAirportCodes = catchAsync(async (req, res) => {

  const airports = await airportService.findByString(req.query.search);

  res.status(httpStatus.OK).send(airports);

});

const getLocationByZip = catchAsync(async (req, res) => {

  const location = await locationService.findLocationByZip(req.query.zip)

  res.status(httpStatus.OK).send(location);

});

module.exports = {
  getAirportCodes,
  getLocationByZip
};