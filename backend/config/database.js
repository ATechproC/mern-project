const mongoose = require("mongoose");

const dbConnect = () => {
    return mongoose
    .connect(`${process.env.MONGO_URI}/prescripto`)
    .then((conn) => {
        console.log(`Database : ${conn.connection.host}`);
        return conn;
    })
}

module.exports = dbConnect;