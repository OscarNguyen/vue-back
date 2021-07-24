'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateContent = exports.postContent = exports.getContent = undefined;

var _page = require('../models/page');

var _page2 = _interopRequireDefault(_page);

var _page3 = require('../services/page');

var _page4 = _interopRequireDefault(_page3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//GET
var getContent = exports.getContent = async function getContent(req, res, next) {
  try {
    var type = req.params.type;
    console.log(type);

    var result = await _page4.default.findContent(type);
    return res.json(result);
  } catch (err) {
    // return res.status(400).json({error:"content not"})
    next(err);
  }
};

//POST
var postContent = exports.postContent = async function postContent(req, res, next) {
  try {
    var type = req.body.type;
    var content = req.body.content;

    var page = new _page2.default({ type: type, content: content });
    var createdPage = await _page4.default.createContent(page);
    return res.json(createdPage);
  } catch (err) {
    next(err);
  }
};

//UPDATE
var updateContent = exports.updateContent = async function updateContent(req, res, next) {
  try {
    var type = req.body.type;
    var content = req.body.content;

    var result = await _page4.default.updateContent({ type: type, content: content });
    return res.json(result);
  } catch (err) {
    next(err);
  }
};