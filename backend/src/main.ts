import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import path from 'path';
import fileRouter from './domains/file/FileResource';

dotenv.config();

const app: Express = express();
const port = process.env.PORT;
const BASE_API = '/v1/api/';

app.use(`${BASE_API}*`, (req, res, next) => {
  console.log('Request Type:', req.method)
  next()
});

app.use(`${BASE_API}files`, fileRouter);




const ROOT_DIR = process.cwd().slice(0, process.cwd().lastIndexOf('/') + 1);
app.use(express.static(path.join(ROOT_DIR, 'dist')));

app.get('/*', (req: Request, res: Response) => {
  res.sendFile(path.join(ROOT_DIR, 'dist', 'index.html'));
});



app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});