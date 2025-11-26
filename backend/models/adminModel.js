const mongoose = require("mongoose");

const bcrypt = require("bcryptjs");

const adminSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "admin name is required"],
        minlength: [3, "Too short name"],
        maxlength: [100, "Too long name"],
        trim : true
    },
    slug: String,
    email: {
        type: String,
        required: [true, "admin email is required"],
        lowercase : true,
        trim : true,
        unique: true
    },
    password: {
        type: String,
        required: [true, "password is required"],
        minlength: [8, "Too short password"],
        maxlength: [32, "Too long password"],
        trim : true
    },
    address: {
        type: String,
        required: [true, "address is required"]
    },
    image: {
        type : String,
    }
}, {
    timestamps: true
});

adminSchema.pre('save', async function (next) {
    // Only run if password was modified
    if (!this.isModified('password')) return next();

    // Hash the password with cost factor 12
    this.password = await bcrypt.hash(this.password, 12);
});

const admin = mongoose.models.admin || mongoose.model("admin", adminSchema);

module.exports = admin;