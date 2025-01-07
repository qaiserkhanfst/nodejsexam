const isAuthenticated = (req, res, next) => {
    const isAuthenticated = true; // Placeholder for actual authentication logic
    if (isAuthenticated) {
        next();
    } else {
        res.redirect('/login');
    }
};

module.exports = { isAuthenticated };