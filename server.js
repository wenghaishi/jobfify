import express from 'express';
const app = express();
import notFoundMiddleware from './middleware/not-Found.js';
import errorHandlerMiddleware from './middleware/error-handler.js';
import dotenv from 'dotenv';
dotenv.config();

import connectDB from './db/connect.js';

//middleware
app.use(notFoundMiddleware)
app.use(errorHandlerMiddleware)

app.get('/', (req, res) => {
  res.send('welcome!')
})

const port = process.env.PORT || 5000

app.listen(port, () => {
  console.log(`Server is listening on ${port}`)
})

const start = async () => {
  try{
    await connectDB(process.env.MONGO_URL)
  } catch (error) {

  }
}