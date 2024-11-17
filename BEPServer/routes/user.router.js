const express = require('express');
const router = express.Router();
const {loginUser,newUser,fetchUser,update,passwordForgot,passwordReset} = require('../controllers/user.controller')
const {fetchBooks,save} = require("../controllers/booklist.controller");
const {verifyToken} = require('../utils/auth');
// route
router.post('/login',loginUser);
router.post('/register',newUser);
router.get('/users',verifyToken, fetchUser);
router.put('/users',verifyToken, update);
router.post('/forgot-password',passwordForgot);
router.post('/reset-password',passwordReset);

router.get('/books-listing',verifyToken,fetchBooks);
router.post('/books-listing',verifyToken,save);

module.exports = router;
