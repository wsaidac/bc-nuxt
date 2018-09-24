module.exports = (on, config) => {
  if (process.env.BASE_URL) {
    config.baseUrl = process.env.BASE_URL;
  }

  return config;
};
