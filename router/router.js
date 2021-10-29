const express = require('express');
const router = express.Router();

const controller = require('../controllers/controller');

router.get('/', controller.gettodo);
router.post('/', controller.posttodo);

module.exports = router;