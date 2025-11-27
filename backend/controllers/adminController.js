const async_handler = require("express-async-handler");
const ApiError = require("../utils/ApiError");
const createToken = require("../utils/createToken");

exports.login = async_handler(async (req, res, next) => {

    const { password, email } = req.body;

    if (email !== process.env.ADMIN_EMAIL || password !== process.env.ADMIN_PASSWORD) {
        return next(new ApiError("Invalid credentials", 401))
    }

    const token = createToken(email + password);

    res.status(200).json({ token });
})