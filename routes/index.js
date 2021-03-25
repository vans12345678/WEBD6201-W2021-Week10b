"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
let router = express.Router();
router.get('/', function (req, res, next) {
    res.render('index', { title: 'Express' });
});
router.get('/', function (req, res, next) {
    res.render('index', { title: 'home' });
});
module.exports = router;
//# sourceMappingURL=index.js.map