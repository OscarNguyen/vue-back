'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateArticle = exports.createArticle = exports.getOneArticle = exports.getAllArticles = undefined;

var _news = require('../models/news');

var _news2 = _interopRequireDefault(_news);

var _news3 = require('../services/news');

var _news4 = _interopRequireDefault(_news3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//GET
var getAllArticles = exports.getAllArticles = async function getAllArticles(req, res, next) {
  try {
    var result = await _news4.default.findAllArticles();
    return res.json(result);
  } catch (err) {
    next(err);
  }
};

var getOneArticle = exports.getOneArticle = async function getOneArticle(req, res, next) {
  try {
    var id = req.params.id;
    var result = await _news4.default.findOneArticle(id);
    return res.json(result);
  } catch (error) {
    next(error);
  }
};

//POST
var createArticle = exports.createArticle = async function createArticle(req, res, next) {
  try {
    var _req$body = req.body,
        title = _req$body.title,
        body = _req$body.body;


    var article = new _news2.default({ title: title, body: body });
    var result = await _news4.default.createArticle(article);
    return res.json(result);
  } catch (error) {
    next(error);
  }
};

//UPDATE
var updateArticle = exports.updateArticle = async function updateArticle(req, res, next) {
  try {
    var data = req.body;
    var result = await _news4.default.updateArticle(data);
    return res.json(result);
  } catch (error) {
    next(error);
  }
};