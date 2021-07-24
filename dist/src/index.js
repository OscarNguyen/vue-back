'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _cors = require('cors');

var _cors2 = _interopRequireDefault(_cors);

var _page = require('./routers/page');

var _page2 = _interopRequireDefault(_page);

var _news = require('./routers/news');

var _news2 = _interopRequireDefault(_news);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

require('dotenv').config();
// const express = require('express')

// const mongoose = require('mongoose')

// const cors = require('cors')

var errorHandler = require('./middlewares/errorHandler');
// const page = require('./routers/page')
var app = (0, _express2.default)();
var url = process.env.MONGODB_URI;
var PORT = process.env.PORT;

//* Middlewares
app.use(_express2.default.json());
app.use((0, _cors2.default)());

//* Connecting to db
_mongoose2.default.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
}).then(function () {
  return console.log('connected to db');
}).catch(function (err) {
  return console.log('error connecting to db', err.message);
});

//* Routers
app.use('/api/page', _page2.default);
app.use('/api/news', _news2.default);
//* Error Handler

app.listen(PORT, function () {
  return console.log('server running on ' + PORT);
});

app.use(errorHandler);