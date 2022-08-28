const jwt = require('jsonwebtoken');

const authMiddleware = async (req, res, next) => {
  const accessToken = req.header('x_auth');
  if (accessToken == null) {
    res.status(403).json({success:false, errormessage:'Authentication fail'});
  } else {
    try {
      const tokenInfo = await new Promise((resolve, reject) => {
        jwt.verify(accessToken, process.env.JWT_SECRET,
          (err, decoded) => {
            if (err) {
              reject(err);
            } else {
              resolve(decoded);
            }
          });
      });
      req.tokenInfo = tokenInfo;
      next();
    } catch(err) {
      console.log(err);
      res.status(403).json({success:false, errormessage:'Authentication fail'});
    }
  }
}

module.exports = authMiddleware;