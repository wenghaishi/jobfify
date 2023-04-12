import express from 'express';
const app = express();
import notFoundMiddleware from './middleware/not-Found.js';
import errorHandlerMiddleware from './middleware/error-handler.js';


app.get('/', (req, res) => {
  throw new Error('error')
  res.send('welcome!')
})

app.use(notFoundMiddleware)
app.use(errorHandlerMiddleware)

const port = process.env.PORT || 5000

app.listen(port, () => {
  console.log(`Server is listening on ${port}`)
})