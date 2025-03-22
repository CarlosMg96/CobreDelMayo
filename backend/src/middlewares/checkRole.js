const checkRole = (requiredRoles) => {
    return (req, res, next) => {
        if (!req.userRole || !requiredRoles.includes(req.userRole)) {
            return res.status(403).send({ message: 'Access denied' });
        }
        next();
    };
};

module.exports = checkRole;
