const marketingURIS = [
  'https://www.googletagmanager.com',
  'https://tagmanager.google.com',
  'http://www.googleadservices.com',
  'https://www.googleadservices.com',
  'https://www.google-analytics.com',
  'https://bat.bing.com',
  'http://bat.bing.com',
  'https://connect.facebook.net',
  'https://static.hotjar.com',
  'https://script.hotjar.com',
  'https://googleads.g.doubleclick.net',
  'https://optimize.google.com',
  'https://fonts.googleapis.com',
  '*.trackedlink.net',
  '*.blueconic.net',
  '*.visualwebsiteoptimizer.com',
  'https://dev.visualwebsiteoptimizer.com',
  '*.riskified.com',
  'https://phrase.com',
  'https://phraseapp.com',
  'https://app.phrase.com',
];
const scripts = [
  '\'unsafe-eval\'',
  '\'unsafe-inline\'',
  '*.rapido.com',
  '*.cgaws.cloud',
  ...marketingURIS,
];

const workers = [
  '\'unsafe-eval\'',
  '\'unsafe-inline\'',
  '*.rapido.com',
  ...marketingURIS,
];

const styles = ['\'self\'', '\'unsafe-inline\'', '*.rapido.com', '*.cgaws.cloud', ...marketingURIS];
const iframes = ['\'self\'', 'https://optimize.google.com', 'https://vars.hotjar.com', 'https://www.facebook.com', 'https://www.googletagmanager.com'];
const reports = [
  'https://sentry.io/api/1441242/security/?sentry_key=98825ca3d73c4dd58305cd0e794873c4',
];

module.exports = {
  scripts, styles, iframes, reports, workers,
};
