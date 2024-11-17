const express = require('express');
const router = express.Router();
const { fetchBooks } = require("../controllers/booklist.controller");

const { verifyToken } = require('../utils/auth');

// router.get('/books-listing',verifyToken,fetchBooks);

module.exports = router;