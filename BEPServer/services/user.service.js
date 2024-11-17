const db = require("../utils/database");

function register(req, callBack) {
    const { userName, password, firstName, lastName } = req;

    const sql = "INSERT INTO usermanagement (userName,password,firstName,lastName,createdOn,enabled) VALUES (?,?,?,?,?,?)";
    try {
        db.query(sql, [userName, password, firstName, lastName, new Date(), true], (err, result, field) => {
            if (err) return callBack(err);
            return callBack(null, result);
        });
    } catch (error) {
        console.log("register::", error)
        return callBack(error)
    }

}

function getUser(callBack) {
    const sql = "SELECT id,userName,firstName,lastName FROM usermanagement";
    db.query(sql, [], (err, result, field) => {
        if (err) return callBack(err);
        return callBack(null, result);
    })
}

function getUserByEmailId(userName, callBack) {
    const sql = "SELECT * FROM usermanagement WHERE userName=?"
    db.query(sql, [userName], (err, result, field) => {
        if (err) return callBack(err);
        return callBack(null, result[0]);
    })
}

function updateUser(req, callBack) {
    const sql = "UPDATE usermanagement set firstName=?,lastname=?,password=? WHERE id=?";
    db.query(sql, [req.firstName, req.lastName, password, id], (err, result, field) => {
        if (err) return callBack(err);
        return callBack(null, result[0]);
    })
}

function forgotPassword(req, callBack) {
    const sql = "SELECT * FROM usermanagement where userName=?";
    db.query(sql, [req], (err, result, field) => {
        if (err) callBack(err);
        return callBack(null, result[0]);
    })
}

function updatePassKey(str, userName, callBack) {
    const sql = "UPDATE usermanagement set resetKey=? WHERE userName=?";
    db.query(sql, [str, userName], (err, result, field) => {
        if (err) callBack(err);
        return callBack(null, result);
    })
}

function resetPassword(data,callBack){
    const sql = "UPDATE usermanagement set password=? WHERE resetKey=?";
    db.query(sql, [data.password,data.token], (err, result, field) => {
        if (err) callBack(err);
        return callBack(null, result);
    })
}

module.exports = { register, getUser, getUserByEmailId, updateUser, forgotPassword, updatePassKey,resetPassword }