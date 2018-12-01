
module.exports = (req, res, next) => {
    if (req.user.permission === 0) {
        //console.log(req.user);
        return res.status(401).send({ error: 'You don\'t have permission to access.' });
    }
    next();
}