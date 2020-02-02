module.exports = {
    mongoDbUrl : 'mongodb+srv://nikola:nikola1234@rticluster-ks5aq.mongodb.net/test?retryWrites=true&w=majority',
    PORT: process.env.PORT || 3000,
    globalVariables: (req, res, next) => {
        res.locals.success_message = req.flash('success-message');
        res.locals.error_message = req.flash('error-message');
        next();
    }
};
