export default ({ req, store }) => {
  if (!process.server) return;
  let label = req.headers.host.split('.').slice(-2)[0];
  const contextSlug = req.url.split('/')[1];
  const [language, country] = contextSlug.split('-');

  if (label.startsWith('localhost')) {
    label = 'rapido';
  }

  store.commit('context/setCurrentLabel', label);
  store.commit('context/setCurrentCountry', country);
  store.commit('context/setCurrentLanguage', language);
};
