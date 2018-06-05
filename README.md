## Lab 36

### Overview

This application allows users to update the page with instances of food items. Once entered, food items persist on page due to MongoDB integration and remain there until either edited or deleted from the page.

To run application, MongoDB and the server must be launched from the back-end repository while `npm run watch` must be run from the front-end repository.

### Front End

Built using React, Redux, and Webpack. `.env` file must be structured as follows:

```
API_URL=http://localhost:3000
NODE_ENV=development
```

### Back End

Built using Node.js and integrated with MongoDB for persistence. `.env` file must be structured as follows:
```
PORT=3000
MONGODB_URI=mongodb://localhost/testing
NODE_ENV=development
```