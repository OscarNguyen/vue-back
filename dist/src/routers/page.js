'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _page = require('../controllers/page');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

router.get('/:type', _page.getContent);
router.post('/create', _page.postContent);
router.put('/update', _page.updateContent);

exports.default = router;