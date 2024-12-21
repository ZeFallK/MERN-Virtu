const express = require('express');
const dotenv = require('dotenv');
dotenv.config( {path: './config/.env'});
const connectDB = require('./config/db');

const app = express();
const port = process.env.PORT;;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('API is running...');
});

app.use('/api', require('./routes/user.routes'));
connectDB();
app.listen(port, () => {
    console.log(`Server is running on port ${process.env.PORT}`)
    });