const { register, getUser, updateUser, getUserByEmailId, forgotPassword, updatePassKey, resetPassword } = require("../services/user.service")
const { response } = require("../models/response")
const { genSaltSync, hashSync, compareSync } = require("bcrypt");
const { sign } = require("jsonwebtoken");
const { transporter } = require("../services/mailer");
const randomStr = require("randomstring");

// GET /login
const loginUser = (req, res) => {
    const body = req.body
    getUserByEmailId(body.userName, (err, data) => {
        if (err) return res.status(500).json(response(500, "error", "User not found", null));
        if (!data) {
            return res.status(500).json(response(500, "error", "Invalid username or password", null));
        }
        const matched = compareSync(body.password, data.password);
        if (matched) {
            data.password = undefined;
            const token = sign({ result: data }, "%Don'tDar3t0!ook", {
                expiresIn: "1h"
            })
            return res.json({
                code: 200,
                status: "success",
                message: "Logged in successfuly",
                token: token
            });

        } else {
            return res.json(response(500, "error", "Invalid username or password", null))
        }
    });
};


// POST /user
const newUser = (req, res) => {
    const body = req.body;
    if (!body.userName || !body.password) return res.status(400).json({ "status": 400, "message": "Email and password can not be empty." });

    const salt = genSaltSync(10);
    body.password = hashSync(body.password, salt);
    register(body, (err, result) => {
        if (err) {
            console.log(err);
            var message = "Failed to register user"
            if (err.code == "ER_DUP_ENTRY") {
                message = "User already exists!"
            }
            return res.status(500).json(response(500, "error", message, null))
        }
        if (!result) res.status(500).json(response(500, "error", "Failed to register user"))
        res.status(201).json(response(201, "success", "User created", result))
    })
};

// GET /user
const fetchUser = (req, res) => {
    getUser((err, result) => {
        if (err) {
            console.log(err);
            return res.status(500).json(response(500, "error", "Couldn't fetch users", null));
        }
        if (!result) return res.status(200).json(response(200, "success", "No record found", null));

        return res.status(200).json(response(200, "success", "Users fetched", result));
    })
};

const update = (req, res) => {
    const body = req.body;
    const salt = genSaltSync(10);
    body.password = hashSync(body.password, salt);
    updateUser(body, (err, result) => {
        if (err) {
            console.log(err);
            return res.status(500).json(response(500, "error", "Couldn't update user", null));
        }
        return res.status(200).json(response(200, "success", "User details updated", result));
    })
}

const passwordForgot = async (req, res) => {
    if (!req.body.userName) return res.status(500).json(response(500, "error", "Enter your email!!"));
    forgotPassword(req.body.userName, (err, result) => {
        if (err) return res.status(500).json(response(500, "error", "Unable to fetch record"));
        if (!result) return res.status(200).json(response(200, "success", "No record found"));
        const str = randomStr.generate();
        updatePassKey(str, req.body.userName, (err, res1) => {
            if (err) { console.log("couldn't store passkey"); return res.status(500).json(response(500, "error", "Unable to store passkey")); }
        });
        const mailObj = {
            from: 'karuna.pati23@gmail.com',
            to: req.body.userName,
            subject: "BookExchannge: Password recovery",
            html: "click here to recover your password <a href='http://localhost:5173/reset-password?token=" + str + "'>Reset password</a>"
        };
        transporter.sendMail(mailObj, (err) => {
            if (err) { console.log(err); return res.status(500).json(response(500, "error", "Couldn't send recovery email")); }
            return res.status(200).json(response(200, "success", "Recovery email sent!"));
        });
    });
}

const passwordReset = async (req, res) => {
    const body = req.body;
    const salt = genSaltSync(10);
    body.password = hashSync(body.password, salt);
    resetPassword(body, (err) => {
        if (err) return res.status(500).json(response(500, "error", "Couldn't reset password"));
        return res.status(200).json(response(200, "success", "Password reset successfully!"));
    })
}

module.exports = { newUser, fetchUser, loginUser, update, passwordForgot, passwordReset };
