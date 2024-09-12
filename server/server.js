import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import connectDB from './database/db.js';
import songRoute from './routes/songRoute.js';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use('/uploads', express.static(path.join(__dirname, 'public/uploads')));
app.get('/',(req,res)=>res.send('wellcome to the backedn'))
app.use(bodyParser.json());
app.use(cors());
app.use(express.json());

// Connect with the database
connectDB();

// Use song model for routes
app.use('api/song',songRoute);

const PORT = 5000;

app.listen(PORT, () => {
    console.log(`App listening on the port ${PORT}`);
});