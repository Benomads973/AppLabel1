const express = require('express');
const router = express.Router();
const helloRoute = require('./endpoints/hello')

// middleware that is specific to this router
router.use(function timeLog(req, _, next) {
  const now = Date.now();
  const { method, url } = req.socket.parser.incoming;
  console.log(`[ ${method} ] ${url} Time: ${now}`)
  next();
});

router.get('/', helloRoute.world)

/* DEFINE ENDPOINTS */
router.get('/api', helloRoute.getOrg)
/* END ENDPOINTS */

module.exports = router;