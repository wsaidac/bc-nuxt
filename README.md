[![Build Status](https://travis-ci.com/cgservices/rapido_web.svg?token=ZgTe7kdhPHKTsscs3BSm&branch=master)](https://travis-ci.com/cgservices/rapido_web)

# Rapido web

Vue.js web interface based on Nuxt.js for the Rapido frontend.

## Development
Start developing quickly with Docker Compose:

```
docker-compose build web
docker-compose run web yarn install
docker-compose up web
```

### Unit testing
Jest unit tests are integrated for units and components:
```
docker-compose run web yarn test:unit
```

### E2E testing
End-to-end testing is integrated with Cypress. Docker can be used for headless
testing:
```
docker-compose run web yarn test:e2e
```

Interactive testing with live reloading and a development console cannnot be
run from within a Docker container. Node 8 and Yarn need to be installed on
your local environment.

To install Cypress in your local environment run:
```
yarn install
```

To start the Cypress development console run:
```
yarn cypress
```

### Linting
ESlint and Stylelint are configured to maintain consistent coding standards.
VSCode is recommended with the plugin suggestions in this repo to integrate
linting in your IDE.

To manually run linting run:
```
docker-compose run web yarn eslint
docker-compose run web yarn stylelint
```

### VSCode
VSCode settings are included to configure recommended IDE plugins and add
shortcuts for common test and linting tasks. Press Cmd/Ctrl+Alt+T to open
terminal shortcuts.
