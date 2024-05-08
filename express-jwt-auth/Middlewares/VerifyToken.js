const jwt = require('jsonwebtoken');
const verify = (req, res) => {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
        return res.status(401).json({
            message: 'No token provided'
        });
    }
}
const token = authHeader.split(' ')[1];
jwt.verify(token, '@smktibazma', (err, decoded) => {
    if (err) {
        return res.status(403).json({
            message: 'Token is not valid'
        });
    }
})