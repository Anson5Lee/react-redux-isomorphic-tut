import express from 'express';
import { apiPort } from '../config/env';
import logger from 'morgan';

const app = express();
app.use(logger('combined'));
app.get('/api', (req, res) => {
  res.send('Hello world');
});

app.listen(apiPort, (err) => {
  if(err) {
    console.log(err);
  } else {
    console.log(`Api listening on port ${apiPort}!`);
  }
});
