'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _news = require('../models/news');

var _news2 = _interopRequireDefault(_news);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var createArticle = function createArticle(article) {
  return article.save();
};

var findAllArticles = function findAllArticles() {
  return _news2.default.find({}).exec();
};

var findOneArticle = function findOneArticle(id) {
  return _news2.default.findById(id).exec();
};

var updateArticle = function updateArticle(update) {
  var opts = { runValidators: true, new: true, context: 'query' };

  return _news2.default.findByIdAndUpdate(update.id, { body: update.body, title: update.title }, opts).exec();
};

exports.default = { createArticle: createArticle, findAllArticles: findAllArticles, findOneArticle: findOneArticle, updateArticle: updateArticle };