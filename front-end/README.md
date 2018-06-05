![cf](http://i.imgur.com/7v5ASc8.png) 36: Async Actions
===

#### Feature Tasks 
  * Create a frontend to connect o backend
  * Use react/redux best practices
  * Add reporter and thunk middleware to your redux store
  * make async action creators for making ajax request to backend
  * make sync action creators from updating app store


#### Documentation  
Write a description of the project in your README.md, including detailed instructions for how to build your app. In your frontend README.md add a code block with your frontend .env vars, and in your backend README.md add a code block with your backend .env vars.


To build app, make 2 directories for front-end and back-end.
    Add following dependencies to package.json and run npm i:
    ```
     "devDependencies": {
        "babel-core": "^6.26.3",
        "babel-eslint": "^8.2.3",
        "babel-loader": "^7.1.4",
        "babel-preset-env": "^1.7.0",
        "babel-preset-react": "^6.24.1",
        "babel-preset-stage-0": "^6.24.1",
        "css-loader": "^0.28.11",
        "dotenv": "^5.0.1",
        "enzyme": "^3.3.0",
        "enzyme-adapter-react-16": "^1.1.1",
        "eslint": "^4.19.1",
        "eslint-config-airbnb-base": "^12.1.0",
        "eslint-plugin-import": "^2.12.0",
        "eslint-plugin-jest": "^21.15.1",
        "eslint-plugin-react": "^7.8.2",
        "html-webpack-plugin": "^3.2.0",
        "jest": "^22.4.4",
        "mini-css-extract-plugin": "^0.4.0",
        "node-sass": "^4.9.0",
        "prop-types": "^15.6.1",
        "react": "^16.3.2",
        "react-dom": "^16.3.2",
        "react-redux": "^5.0.7",
        "react-router-dom": "^4.2.2",
        "redux": "^4.0.0",
        "redux-devtools-extension": "^2.13.2",
        "redux-mock-store": "^1.5.1",
        "sass-loader": "^7.0.1",
        "style-loader": "^0.21.0",
        "uuid": "^3.2.1",
        "webpack": "^4.8.3",
        "webpack-cli": "^2.1.3",
        "webpack-dev-server": "^3.1.4",
        "webpack-merge": "^4.1.2"
      },
      "dependencies": {
        "superagent": "^3.8.3"
      },

    ```

    Add the following dependencies to the back end by running npm i

    ```
     "dependencies": {
        "body-parser": "^1.17.2",
        "cors": "^2.8.3",
        "dotenv": "^4.0.0",
        "express": "^4.15.3",
        "mongoose": "^4.11.0",
        "morgan": "^1.8.2"
      },
      "devDependencies": {
        "expect": "^1.20.2",
        "faker": "^4.1.0",
        "mocha": "^3.4.2",
        "superagent": "^3.5.2"
      }
    ```

    Add the following script to your .json front-end file:

    ```
    "scripts": {
        "watch": "webpack-dev-server --config webpack.dev.js",
        "test": "jest"
      },
     ```

     Add the following scripts to your .json back-end file:

     ```
     "scripts": {
         "start": "node index.js",
         "start-db": "mkdir -p ./db && mongod --dbpath ./db",
         "stop-db": "killall mongod",
         "test": "mocha"
       },
      ```

    To run program start up a terminal in the front-end and two terminals for the back-end.
    Start your back-end mongodb and node servers
    Start your front-end

    
