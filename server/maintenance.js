const path = require('path');

function getIp(req) {
  if (req.headers['x-forwarded-for']) {
    return req.headers['x-forwarded-for'].split(',').pop();
  }
  return req.connection.remoteAddress;
}

module.exports = options => (req, res, next) => {
  if (options.whitelist && options.whitelist.includes(getIp(req))) {
    next();
  } else {
    res.status(503).sendFile(path.join(__dirname, 'maintenance', 'index.html'));
  }
};
