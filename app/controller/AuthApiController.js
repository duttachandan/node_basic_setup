require('dotenv').config();
const express = require('express');
const JWT = require('jsonwebtoken');
const SECRET = process.env.SECRET_KEY

class AuthApiController {
    async LoginApi(req, res) {
        const { username, password } = req.body;

        const payload = {
            sub: username,
            role: password
        };

        const token = JWT.sign(payload, SECRET, {
            expiresIn: '15m'
        })
        console.log("generate token", token);
        res.redirect('/');
    }
}

module.exports = new AuthApiController();