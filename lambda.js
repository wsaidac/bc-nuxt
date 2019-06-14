const express = require('express');
const serverless = require('serverless-http');
const { Nuxt } = require('nuxt');

const sitemap = require('./server/sitemap.js');

const config = require('./nuxt.config.js');

const nuxt = new Nuxt(config);

const app = express();
app.use('/:locale/sitemap.xml', sitemap);
app.use(nuxt.render);

const handler = serverless(app);

module.exports.handler = async (event, context) => {
  await nuxt.ready();
  const result = await handler(event, context);
  return result;
};
