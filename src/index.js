const express = require('express');
const router = express.Router();
const postRouter = require('./postRouter');

router.get('/healthCheck', (req, res) => {
  const data = {
    status: "Weorking fine",
    ts: new Date().toLocaleString(),
  };
  return res.send(data).end();
})
router.use('/post', postRouter);

module.exports = router;
