[![Build Status](https://travis-ci.com/cgservices/rapido_web.svg?token=ZgTe7kdhPHKTsscs3BSm&branch=master)](https://travis-ci.com/cgservices/rapido_web)

[![Maintainability](https://api.codeclimate.com/v1/badges/351eac69661d387c167e/maintainability)](https://codeclimate.com/repos/5c9b7f4bf784d0257a0047d8/maintainability)

[![Test Coverage](https://api.codeclimate.com/v1/badges/351eac69661d387c167e/test_coverage)](https://codeclimate.com/repos/5c9b7f4bf784d0257a0047d8/test_coverage)

# Rapido web

Vue.js web interface based on Nuxt.js for the Rapido frontend.

## Local Development

Node <= 10 and Yarn need to be installed on your local environment.

```
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.34.0/install.sh | bash
source ~/.bashrc
nvm install 10
nvm use 10
brew install yarn
```

Install the dependencies and start the local environment

```
yarn install
yarn dev-debug
```

### Unit testing
Jest unit tests are integrated for units and components:
```
yarn test:unit
```

### E2E testing
End-to-end testing is integrated with Cypress. Docker can be used for headless
testing:
```
yarn test:e2e
```

### Linting
ESlint and Stylelint are configured to maintain consistent coding standards.
VSCode is recommended with the plugin suggestions in this repo to integrate
linting in your IDE.

To manually run linting run:
```
yarn lint
```

## Development using Docker
Start developing quickly with Docker Compose:

```
docker-compose build web
docker-compose run web yarn install
docker-compose up web
```



### Storybook

To run the server locally:
```
yarn storybook
```

Deploy to github pages:
```
yarn storybook:deploy
```

More about Storybook/Vue:
https://www.learnstorybook.com/vue/en/get-started/



### VSCode
VSCode settings are included to configure recommended IDE plugins and add
shortcuts for common test and linting tasks. Press Cmd/Ctrl+Alt+T to open
terminal shortcuts.


