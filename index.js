import express from 'express';  
import bodyParser from 'body-parser';

import userRoutes from './Routes/users.js';

const app = express();
const PORT = 5001;

app.use(bodyParser.json());

app.use('/users', userRoutes)


app.get('/', (req, res) => res.send('Hello from home pages'));




app.listen(PORT, () => console.log(`server Running on port: http://localhost:${PORT}`));