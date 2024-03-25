
import express from "express";
import mongoose from "mongoose";
import expressConfig from "./frameworks/webserver/express.js";
import serverConfig from "./frameworks/webserver/server.js";
import config from "./config/config.js";
import connection from "./frameworks/database/mongodb/connection.js";
import routes from "./frameworks/webserver/routes/routes.js";
import errorMiddleware from "./frameworks/webserver/middleware/middleware.js";

const app = express();

expressConfig(app);

routes(express, app);

connection(mongoose, config).connectToMongo();

app.use(errorMiddleware);

serverConfig(app, config).startServer();
