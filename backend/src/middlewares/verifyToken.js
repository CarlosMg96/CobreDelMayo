const jwt = require('jsonwebtoken');

const keysToken = {
    secret: process.env.JWT_SECRET
}

const verifyToken = (req, res, next) => {
    let token = req.headers['x-access-token'] || req.headers['authorization'];

      if (token && token.startsWith('Bearer ')) {
        token = token.slice(7, token.length); 
    }

    if (!token) return res.status(401).send({ message: 'No token provided' });

    jwt.verify(token, keysToken.secret, (err, decoded) => {
        if (err) return res.status(500).send({ message: 'Failed to authenticate token' });
        req.userId = decoded.id;
        req.userRole = decoded.role;
        req.userArea = decoded.area;
        req.userStatus = decoded.status;
        req.userFullName = decoded.fullname;
        req.userEmail = decoded.email;
        next();
    });
};

module.exports = verifyToken;
