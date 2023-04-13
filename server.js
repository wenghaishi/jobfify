import express from "express";
const app = express();
import notFoundMiddleware from "./middleware/not-Found.js";
import errorHandlerMiddleware from "./middleware/error-handler.js";
import dotenv from "dotenv";
dotenv.config();

//db and authenticate user
import connectDB from "./db/connect.js";

//routers
import authRouter from './routes/authRoutes.js'

//middleware
app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

app.use(express.json())

app.get("/", (req, res) => {
  res.send("welcome!");
});

const port = process.env.PORT || 5000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(port, () => {
      console.log(`Server is listening on port ${port}...`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
