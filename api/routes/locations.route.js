const express = require('express');
const validate = require('../middleware/validate');
const validateApi = require('../validation/api.validation');
const controllerApi = require('../controller/api.controller');


/** Airports API Path Router
*/
const router = express.Router();

router
  .route('/')
  .get(validate(validateApi.getLocationByZip), controllerApi.getLocationByZip)

module.exports = router;