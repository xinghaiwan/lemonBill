var express = require('express');
var router = express.Router();
var userApi = require('./userApi');
/* GET users listing. */
router.get('/api/getUser', userApi);

module.exports = router;