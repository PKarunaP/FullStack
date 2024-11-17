const { verify } = require("jsonwebtoken");
const { response } = require("../models/response")
module.exports = {
    verifyToken: (req, res, next) => {
        var token = req.headers.authorization;
        if (token) {
            token = token.slice(7);
            verify(token, "%Don'tDar3t0!ook", (err, decode) => {
                if (err) {
                    res.status(403).json(response(403, "forbidden", err.message));
                } else {
                    req.body.decode=decode;
                    next();
                }
            })
        } else {
            res.status(403).json(response(403, "forbidden", "Access denied"));
        }
    }
}