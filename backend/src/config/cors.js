module.exports = (req, res, next) => {
    res.header('Access-ControlAllow-Origin', '*')
    res.header('Access-ControlAllow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')
    res.header('Access-ControlAllow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
    next()
}