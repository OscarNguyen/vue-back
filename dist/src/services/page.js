'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _page = require('../models/page');

var _page2 = _interopRequireDefault(_page);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var findContent = function findContent(type) {
  return _page2.default.findOne({ type: type }).exec();
};

var createContent = function createContent(page) {
  return page.save();
};

var updateContent = function updateContent(update) {
  var opts = { runValidators: true, new: true, context: 'query' };
  return _page2.default.findOneAndUpdate({ type: update.type }, { content: update.content }, opts).exec();
};

exports.default = { findContent: findContent, createContent: createContent, updateContent: updateContent };