export default function uppercaseCountryInLocale(lang) {
  return lang
    .split('-')
    .map((e, i) => (i === 1 ? e.toUpperCase() : e))
    .join('-');
}
