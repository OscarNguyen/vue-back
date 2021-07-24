'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _news = require('../controllers/news');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

router.get('/', _news.getAllArticles);
router.get('/:id', _news.getOneArticle);
router.post('/create', _news.createArticle);
router.put('/update', _news.updateArticle);
exports.default = router;