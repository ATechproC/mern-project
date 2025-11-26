const { check } = require("express-validator");
const { validatorMiddleware } = require("../../middlewares/validatorMiddleware");
const Admin = require("../../models/adminModel");
const bcrypt = require("bcryptjs");

exports.get_admin_by_id_validator = [

    check("id")
        .notEmpty()
        .withMessage("admin id is required")
        .bail()
        .isMongoId()
        .withMessage("Invalid id foramt"),

    validatorMiddleware
]

exports.add_new_admin_validator = [
    check("name")
        .notEmpty()
        .withMessage("admin name is required")
        .bail()
        .isLength({ min: 3 })
        .withMessage("Too short admin name")
        .bail()
        .isLength({ max: 100 })
        .withMessage("Too long admin name"),

    check("email")
        .notEmpty()
        .withMessage("email is required")
        .bail()
        .isEmail()
        .withMessage("Invalid email format")
        .bail()
        .custom(async email => {

            const admin = await Admin.findOne({ email });
            if (admin) {
                throw new Error("This email is already exist!!");
            }

            return true;

        }),

    check("password")
        .notEmpty()
        .withMessage("password is required")
        .bail()
        .isLength({ min: 8 })
        .withMessage("Too short password")
        .bail()
        .isLength({ max: 32 })
        .withMessage("Too long password"),
    check("passwordConfirm")
        .notEmpty()
        .withMessage("password confirmation is required")
        .bail()
        .custom(async (passwordConfirm, { req }) => {

            if (!req.body.password) return true;

            const isMatched = req.body.password === passwordConfirm;

            if (!isMatched) throw new Error("the password confirmation does not match!!");

            return true;

        }),
    check("address")
        .notEmpty()
        .withMessage("admin address is required"),
    // check("date")
    //     .notEmpty()
    //     .withMessage("admin date is required"),
    check("address")
        .notEmpty()
        .withMessage("admin address is required")

    , validatorMiddleware
]

exports.update_admin_data_validator = [
    check("name")
        .notEmpty()
        .withMessage("admin name is required")
        .bail()
        .isLength({ min: 3 })
        .withMessage("Too short admin name")
        .bail()
        .isLength({ max: 100 })
        .withMessage("Too long admin name"),

    // check("email")
    //     .notEmpty()
    //     .withMessage("email is required")
    //     .bail()
    //     .isEmail()
    //     .withMessage("Invalid email format")
    //     .bail()
    //     .custom(async email => {
    //         const admin = await Admin.findOne({ email });

    //         if (!admin) {
    //             throw new Error("This email is already exists!!");
    //         }

    //         return true;

    //     }),

    // check("address")
    //     .notEmpty()
    //     .withMessage("admin address is required"),

    validatorMiddleware
]

exports.delete_admin_data_validator = [

    check("id")
        .notEmpty()
        .withMessage("admin id is required")
        .bail()
        .isMongoId()
        .withMessage("Invalid id foramt"),

    validatorMiddleware
]

exports.change_admin_password_validator = [
    check("id")
        .notEmpty()
        .withMessage("admin is required")
        .isMongoId()
        .withMessage("Invalid Id format"),
    check("newPassord").notEmpty().withMessage("new Password is required"),
    check("currentPassword")
        .notEmpty()
        .withMessage("current password is required")
        .bail()
        .custom(async (currentPassword, { req }) => {

            if (!req.body.newPassword) return true;

            const { id } = req.params;
            const admin = await Admin.findById(id);

            const isCurrentPassword = await bcrypt.compare(currentPassword, admin.password);

            if (!isCurrentPassword) {
                throw new Error("Invalid current password!!");
            }

            return true;

        }).custom(async (passwordConfirm, { req }) => {

            if (!req.body.newPassword) return true;

            const isMatched = req.body.password === passwordConfirm;

            if (!isMatched) throw new Error("the password confirmation does not match!!");

            return true;

        }),

    validatorMiddleware
]