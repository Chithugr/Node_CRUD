const express = require('express');
const router = express.Router();

const postRouter = require('./posts');

router.use('/post', postRouter);

module.exports = router;

