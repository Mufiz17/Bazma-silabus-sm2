const express = require('express');
const router = express.Router();
const { register, login, me } = require('../Controller/AuthController');
const verifyToken = require('../Middlewares/VerifyToken');

router.post('/register', register);
router.post('/login', login);
router.get('/me', verifyToken, me);


module.exports = router;