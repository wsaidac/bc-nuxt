require('newrelic');
const express = require('express');
const { Nuxt, Builder } = require('nuxt');
const sitemap = require('./server/sitemap.js');
const maintenance = require('./server/maintenance.js');
const config = require('./nuxt.config.js');

const app = express();
config.dev = (process.env.NODE_ENV === 'development');

async function start() {
  // Init Nuxt.js
  const nuxt = new Nuxt(config);

  const {
    host = process.env.HOST || '127.0.0.1', port = process.env.PORT || 3000,
  } = nuxt.options.server;

  if (process.env.MAINTENANCE_MODE) {
    app.use(maintenance({ whitelist: (process.env.MAINTENANCE_WHITELIST || '').split(',') }));
  }

  // Build only in dev mode
  if (config.dev) {
    const builder = new Builder(nuxt);
    await builder.build();
  } else {
    await nuxt.ready();
  }

  app.use('/:locale/sitemap.xml', sitemap);

  // Give nuxt middleware to express
  app.use(nuxt.render);

  // Listen the server
  app.listen(port, host);
}
start();
