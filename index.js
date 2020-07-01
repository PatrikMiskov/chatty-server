const express = require('express');
const helmet = require('helmet');

const apiRouter = require('./routers/api');

const app = express();

app.use(helmet());

// server hartbeat
app.get('/', (req, res)=>{
  res.send(true).status(200);
});

app.use(express.json());
app.use(apiRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=>{
  console.log(`App is listening on port ${PORT}`);
});