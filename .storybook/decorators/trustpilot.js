import externalLink from 'storybook-external-links/vue'

const URL = "https://widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js"

const decorator = externalLink(URL, {
  async: true,
});

export default decorator

