const Joi = require("joi");


/** API Request Validation
*/
const getAirportCodes = Joi.object().keys({
  query: Joi.object().keys({
    search: Joi.string().allow('')
  })
});

const getLocationByZip = Joi.object().keys({
  query: Joi.object().keys({
    zip: Joi.string()
  })
});

module.exports = {
  getAirportCodes,
  getLocationByZip
}