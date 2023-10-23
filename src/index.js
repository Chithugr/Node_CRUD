const express = require('express');
const router = express.Router();
const postRouter = require('./routes/postRouter');

router.get('/healthCheck', (req, res) => {
  const data = {
    status: "Weorking fine",
    ts: new Date().toLocaleString(),
  };
  return res.send(data).end();
})
router.use('/posts', postRouter);

module.exports = router;
