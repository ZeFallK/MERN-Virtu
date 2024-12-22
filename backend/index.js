const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config( {path: './config/.env'});
const connectDB = require('./config/db');

const app = express();
const port = process.env.PORT;;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use(cors());


app.get('/', (req, res) => {
  res.send('API is running...');
});

app.use('/api', require('./routes/user.routes'));
connectDB();
app.listen(port, '0.0.0.0', () => {
    console.log(`Server is running on port ${process.env.PORT}`)
    });