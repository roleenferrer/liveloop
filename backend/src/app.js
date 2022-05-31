const express = require('express');
const cors = require('cors');
const yaml = require('js-yaml');
const swaggerUi = require('swagger-ui-express');
const fs = require('fs');
const path = require('path');
const OpenApiValidator = require('express-openapi-validator');

const tracker = require('./tracker');
const user = require('./users');
const auth = require('./auth');

const app = express();
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({extended: false}));

const apiSpec = path.join(__dirname, '../api/openapi.yaml');

const apidoc = yaml.load(fs.readFileSync(apiSpec, 'utf8'));
app.use('/v0/api-docs', swaggerUi.serve, swaggerUi.setup(apidoc));

app.use(
  OpenApiValidator.middleware({
    apiSpec: apiSpec,
    validateRequests: true,
    validateResponses: true,
  }),
);

// Post authenticate to login
app.post('/authenticate', auth.authenticate);
// Your routes go here - write them in a new component in it's own .js file
app.get('/v0/location', tracker.getLocation);
// Get user account
app.get('/v0/user', user.getUser);
// Post user account
app.post('/v0/user', user.postUser);

app.use((err, req, res, next) => {
  res.status(err.status).json({
    message: err.message,

    errors: err.errors,
    status: err.status,
  });
});

module.exports = app;
