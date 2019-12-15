/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {

  'get /events/find/:id': 'EventController.get',
  'get /events/find': 'EventController.find',
  'get /events/type/:type': 'EventController.type',
  'post /events/create': 'EventController.create',
  'post /events/update/:id': 'EventController.update',
  'post /events/destroy/:id': 'EventController.destroy',
};
