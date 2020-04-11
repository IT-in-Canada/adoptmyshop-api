const jwt   = require('express-jwt');
const jwks  = require('jwks-rsa');


/**
 * middleware function to check the token
 */
const jwtCheck = jwt({
      secret: jwks.expressJwtSecret({
          cache: true,
          rateLimit: true,
          jwksRequestsPerMinute: 5,
          jwksUri: 'https://dev-tonyk.auth0.com/.well-known/jwks.json'
    }),
    audience: 'https://initial-api/api',
    issuer: 'https://dev-tonyk.auth0.com/',
    algorithms: ['RS256']
});



module.exports = {
  jwtCheck
};