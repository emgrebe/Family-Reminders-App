const jwt = require('jsonwebtoken')
const SECRET = process.env.REACT_APP_SECRET

module.exports = function(req, res, next) {
    // Check for the token being sent in three different ways
    console.log('ahhhh i shit myself')
    let token = req.get('Authorization') || req.query.token || req.body.token;
    if (token) {
      console.log(token)
      // Remove the 'Bearer ' if it was included in the token header
      token = token.replace('Bearer ', '');
      // Check if token is valid and not expired
      jwt.verify(token, SECRET, function(err, decoded) {
        if (err) {
          console.error(err)
          next(err);
        } else {
          // It's a valid token, so add user to req
          req.user = decoded.user;    
          console.log(req.user)
          next();
        }
      });
    } else {
      next();
    }
  };