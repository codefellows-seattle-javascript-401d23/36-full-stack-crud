'use strict';

import express from 'express';
import mongoose from 'mongoose';
import logger from './logger';
import parkRoutes from '../route/park-router';
import treeRoutes from '../route/tree-router';
import errorMiddleWare from './error-middleware';


const app = express();
let server = null;

app.use(parkRoutes);
app.use(treeRoutes);
app.all('*', (request, response) => {
  logger.log(logger.INFO, 'Returning a 404 from the catch-all/default route');
  return response.sendStatus(404);
});
//-----------------------------
app.use(errorMiddleWare);
//-----------------------------
const startServer = () => {
  return mongoose.connect(process.env.MONGODB_URI)
    .then(() => {
      server = app.listen(process.env.PORT, () => {
        logger.log(logger.INFO, `Server is listening on port ${process.env.PORT}------------------------------------`);
      });
    })
    .catch((err) => {
      logger.log(logger.ERROR, `something happened in server, ${JSON.stringify(err)}`);
    });
};

const stopServer = () => {
  return mongoose.disconnect()
    .then(() => {
      server.close(() => {
        logger.log(logger.INFO, 'Server is off------------------------------------');
      });
    });
};

export { startServer, stopServer };
