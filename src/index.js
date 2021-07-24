require('dotenv').config();
import express from 'express';
// const express = require('express')
import mongoose from 'mongoose';
// const mongoose = require('mongoose')
import cors from 'cors';
// const cors = require('cors')
import page from './routers/page';
import news from './routers/news';
const errorHandler = require('./middlewares/errorHandler');
// const page = require('./routers/page')
const app = express();
const url = process.env.MONGODB_URI;
const PORT = process.env.PORT;

//* Middlewares
app.use(express.json());
app.use(cors());

//* Connecting to db
mongoose
  .connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  })
  .then(() => console.log('connected to db'))
  .catch((err) => console.log('error connecting to db', err.message));

//* Routers
app.use('/api/page', page);
app.use('/api/news', news);
//* Error Handler

app.listen(PORT, () => console.log(`server running on ${PORT}`));

app.use(errorHandler);
