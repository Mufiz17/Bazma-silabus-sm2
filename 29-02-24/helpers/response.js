const response = (res, status, data = null) => {
    res.status(status).json(data);
}

module.exports = response;