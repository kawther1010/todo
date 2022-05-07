const express = require('express');
const router = express.Router();

const controller = require('../controllers/controller');

router.get('/', controller.gettodo);
router.get('/data', controller.getdata);
router.get('/done', controller.getdone);
router.post('/add', controller.posttodo);

module.exports = router;