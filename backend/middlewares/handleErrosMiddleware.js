const handleErrorsMiddleware = (err, req, res, next) => {
    err.statusCode = err.statusCode || 500;
    err.status = err.status || "error";
    if(process.env.NODE_ENV === "development") sendErroForDev(res, err);
    else sendErroForProd(res, err)
}

const sendErroForDev = (res, err) => {
    res.status(err.statusCode).json({
        status: err.status,
        error: err,
        message: err.message,
        stack: err.stack
    })
}

const sendErroForProd = (res, err) => {
    res.status(err.statusCode).json({
        status: err.status,
        message: err.message,
    })
}

module.exports = handleErrorsMiddleware;