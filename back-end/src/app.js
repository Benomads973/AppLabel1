// server.js
const express = require('express');
const cors = require('cors');
const port = parseInt(process.env.APP_PORT) || undefined;
const routes = require('./routes')

/* DB denifinition */
// require('./model')
/* DB END */

if (typeof port != 'number' || port >= 65535) {
  throw new Error('APP_PORT env variable is not defined')
}

const app = express();

app.use(cors());

// Middleware pour parser les requêtes JSON
app.use(express.json());
app.use((_,res,next) => {
  res.setHeader('Access-Control-Allow-Origin','*');
  res.setHeader('Access-Control-Allow-Headers','Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods','GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

/* DEFINE ROUTES ENTRIES */
app.use(routes)
/* END ROUTES */

app.listen(port, () => {
  console.log('Server is running on port 5000');
});