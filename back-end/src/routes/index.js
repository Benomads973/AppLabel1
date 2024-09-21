const express = require('express');
const router = express.Router();
const hello = require('./endpoints/hello')

// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
  const now = Date.now();
  const { method, url } = req.socket.parser.incoming;
  console.log(`[ ${method} ] ${url} Time: ${now}`)
  next();
});

router.use('/', hello.world)

module.exports = router;