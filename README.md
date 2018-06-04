# Documentation

A full-stack application that allows users to create lists of podcasts that they listen to.

Podcasts hold the following properties:<br/>
   - name <br/>
   - host<br/>
   - genre (optional)<br/>
   - parentCompany (optional)
   
## Architecture
- View Library: React
- Testing suite: Jest
- State management: Redux
- Module bundler: Webpack
- Styling: Sass
- Transpiling: Babel
- Ajax requests: Superagent
- Continuous Integration: Travis CI
- Coding style: AirBnb
- Other modules used: eslint, css-loader, enzyme, dotenv, html-webpack-plugin, mini-css-extract-plugin, prop-types

## Using locally

Fork and clone this repo. Run this application Chrome and make sure you have the following extension downloaded: [Allow-Control-Allow-Origin:*](https://chrome.google.com/webstore/detail/allow-control-allow-origi/nlfbmbojpeacfghkpbjhddihlkkiljbi?hl=en)

### 1. Set up .env files
Create dotenv files in the back-end and front-end project directories:

Back-end:

    PORT=3000
    NODE_ENV=development
    MONGODB_URI=mongodb://localhost/testing
    
Front-end:

    API_URL=http://localhost:3000
    NODE_ENV=development
    CDN_URL=/

### 2. Turn on server
In back-end folder of project directory:

    npm run dbon
    npm run start

### 3. Open Browser
In front-end folder:

    npm run watch
    
When finished, kill all terminal operations.

## Testing

    npm test
