import express, { Express, Request, Response } from 'express';
import dotenv = require('dotenv');
  
dotenv.config();
  
const app: Express = express();
const port = process.env.PORT;
  
app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server - ⚡️[server]: Server is running');
});

app.get('/ping', (req: Request, res: Response) => {
  res.send('pong');
});
  
app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});