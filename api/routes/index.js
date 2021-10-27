const express = require('express');
const airportsRoute = require('./airports.route');
const locationsRoute = require('./locations.route');


/** Main API Router
*/
const router = express.Router();

const defaultRoutes = [
  {
    path: '/airports',
    route: airportsRoute,
  },
  {
    path: '/locations',
    route: locationsRoute,
  }
];

defaultRoutes.forEach((route) => {

  router.use(route.path, route.route);

});

module.exports = router;