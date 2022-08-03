const controllers = require('../controllers');

function instrumentRoutes(app){
  app.get('/api/instrument/:id', controllers.instrument.get);
  app.get('/api/instrument', controllers.instrument.getAll);
  app.post('/api/instrument', controllers.instrument.create);
  app.put('/api/instrument/:id', controllers.instrument.update);
  app.delete('/api/instrument/:id', controllers.instrument.delete);
}

module.exports = instrumentRoutes;