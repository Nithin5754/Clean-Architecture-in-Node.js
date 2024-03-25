import dotenv from 'dotenv';
dotenv.config();

let MONGO_URI=process.env.MONGO_URL

export default {
  port: process.env.PORT || 3000,
  mongo: {
    uri:MONGO_URI
  }
};