const express = require("express");

const {
    login
} = require("../controllers/adminController");

const {
    login_validator
} = require("../utils/validators/adminValidator");

const router = express.Router();

router.post("/login", login_validator, login);

module.exports = router;