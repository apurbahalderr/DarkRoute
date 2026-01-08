import express from 'express';
import cors from 'cors';
import type { Request, Response, NextFunction } from 'express';


const app = express();

const localOrigin = 'http://localhost:3000';
const hostOrigin = 'https://upside-down.vercel.app';

app.use(cors({
  origin: [localOrigin, hostOrigin],
  credentials: true
}))
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/wake", (req, res: Response) => {
  res.json({ 
    message: "Server is awake!", 
    timestamp: new Date().toISOString(),
    status: "active"
  });
});

export default app;