const express = require("express");

const {
    get_all_doctors,
} = require("../controllers/doctorController");

// const {
//     protect
// } = require("../controllers/adminController");

const router = express.Router();

router.get("/", 
    // protect, 
    get_all_doctors
);

module.exports = router;