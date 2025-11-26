const async_handler = require("express-async-handler");
const { default: slugify } = require("slugify");
const Admin = require("../models/adminModel");
const ApiError = require("../utils/ApiError");
const bcrypt = require("bcryptjs");
const { pagination } = require("../utils/pagination");

exports.add_new_admin = async_handler(async (req, res) => {

    req.body.slug = slugify(req.body.name);
    const newadmin = new Admin(req.body)
    await newadmin.save();

    res.status(201).json({ data: newadmin });
});

exports.get_all_admins = async_handler(async (req, res) => {

    const limit = req.query.limit || 10;
    const page = req.query.page || 1;
    const skip = (page - 1) * limit;

    const admins = await Admin.find().skip(skip).limit(limit);

    const numberOfDocument = await Admin.countDocuments();

    const paginationResult = pagination(page, numberOfDocument, limit, skip);

    res.status(200).json({ result: admins.length, pagination: paginationResult, data: admins });
});

exports.get_admin_by_id = async_handler(async (req, res, next) => {
    const { id } = req.params;
    const admin = await Admin.findById(id);

    if (!admin) {
        return next(new ApiError("there is no admin with this id", 404));
    }

    res.status(200).json({ data: admin })
});

exports.update_admin_data = async_handler(async (req, res, next) => {

    const { id } = req.params;

    const admin = await Admin.findByIdAndUpdate(id, {
        name: req.body.name,
        slug: slugify(req.body.name),
        image: req.body.image,
        address: req.body.address,
    }, { new: true })

    if (!admin) {
        return next(new ApiError("there is no admin for this id", 404))
    }

    res.status(200).json({ data: admin })
});

exports.change_admin_password = async_handler(async (req, res, next) => {

    const { id } = req.params;

    const admin = await Admin.findOneAndUpdate(id, {
        password: await bcrypt.hash(req.password, 12)
    }, { new: true });

    if (!admin) {
        return next(new ApiError("There is no admin for this id", 404));
    }

    res.status(200).json({ data: admin });

})

exports.delete_admin_data = async_handler(async (req, res, next) => {

    const { id } = req.params;

    const admin = await Admin.findByIdAndDelete(id);

    if (!admin) {
        return next(new ApiError("there is no admin for this id", 404))
    }

    res.status(200).json({ message: "admin date deleted successfully", data: admin })
})