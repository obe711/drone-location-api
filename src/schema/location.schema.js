const mongoose = require("mongoose");

const locationSchema = new mongoose.Schema({
  zip: { type: String },
  lat: { type: Number },
  lng: { type: Number },
  city: { type: String },
  state_id: { type: String },
  state_name: { type: String },
  zcta: { type: String },
  population: { type: Number },
  density: { type: Number },
  county_fips: { type: String },
  county_name: { type: String },
  county_weights: { type: String },
  county_names_all: { type: String },
  county_fips_all: { type: String },
  imprecise: { type: String },
  military: { type: String },
  timezone: { type: String }
}, { timestamps: false });

/** 
 * Auto complete location search
 * @return {array} length of 5
*/
locationSchema.statics.AutoSearch = function (searchString) {
  return this.find({
    $or: [
      { city: { $regex: searchString, $options: "i" } },
      { state_name: { $regex: searchString, $options: "i" } },
      { country_name: { $regex: searchString, $options: "i" } },
    ]
  }).sort({ city: -1, state_name: -1, country_name: -1 }).limit(5)
}

/**
 * Search data by Zipcode
 * @param {string} zip 
 * @returns {array}
 */
locationSchema.statics.SearchByZip = function (zip) {
  return this.findOne({ zip });
}

module.exports = locationSchema;