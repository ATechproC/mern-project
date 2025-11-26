const express = require("express");

const {
    add_new_admin,
    get_all_admins,
    get_admin_by_id,
    update_admin_data,
    delete_admin_data,
    change_admin_password
} = require("../controllers/adminController");

const {
    add_new_admin_validator,
    get_admin_by_id_validator,
    update_admin_data_validator,
    delete_admin_data_validator
} = require("../utils/validators/adminValidator");

const router = express.Router();

router.post("/add-admin", add_new_admin_validator, add_new_admin);

router.get("/", get_all_admins);

router.get("/:id", get_admin_by_id_validator, get_admin_by_id);

router.put("update-admin/:id", update_admin_data_validator, update_admin_data);

router.put("/change-password/:id", change_admin_password)

router.delete("/delete-admin/:id", delete_admin_data_validator, delete_admin_data);

module.exports = router;