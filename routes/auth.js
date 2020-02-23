const express = require('express');
const router = express.Router();
const {
    registro
} = require('../controllers/auth');

router.post('/registro', registro);
module.exports = router;