const instrumentRoutes = require('./intrument');

const setupRoutes = (app) => {
  instrumentRoutes(app);
}

module.exports = setupRoutes;