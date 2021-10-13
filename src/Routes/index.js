'use strict'

const routes = app => {
  app.use('/v1/tvshows/', require('../Components/Tvshows').routes)
}

module.exports = routes
