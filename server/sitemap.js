const express = require('express');

const router = express.Router({ mergeParams: true });
const sm = require('sitemap');
const axios = require('axios');

const query = `{
  servicePages {
    nodes {
      id
      slug
    }
  }
  categoryTerms(last: 99999)  {
    nodes {
      id
      slug
    }
  }
}`;

const request = context => axios({
  url: process.env.API_SERVER,
  method: 'post',
  headers: { 'X-Cms-Context': context },
  data: { query },
});

function transformPages(pages) {
  return pages.map(page => ({
    url: page.slug,
    priority: 0.8,
  }));
}

const createSitemap = (schema, domain, locale, servicePages, categoryTerms) => sm.createSitemap({
  hostname: [schema, domain, locale].join('/'),
  cacheTime: 1,
  urls: [
    { url: '', priority: 1 },
    ...transformPages(servicePages.nodes),
    ...transformPages(categoryTerms.nodes),
  ],
});

router.get('/', async (req, res) => {
  const domain = 'rapido';
  const { locale } = req.params;
  const context = `${domain}-${locale}`;
  request(context).then((result) => {
    const { servicePages, categoryTerms } = result.data.data;
    const sitemap = createSitemap('https://', req.headers.host, locale, servicePages, categoryTerms);

    sitemap.toXML((err, xml) => {
      if (err) {
        console.log(err);
        return res.status(500).end();
      }
      res.header('Content-Type', 'application/xml');
      return res.send(xml);
    });
  });
});

module.exports = router;
