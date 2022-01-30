const router = require('express').Router();
const { Reservation, Restaurant, Table, User } = require('../models')

const apiRoutes = require('./api');
// const homeRoutes = require('./home-routes');
// const dashboardRoutes = require('./dashboard-routes');

// router.use('/', homeRoutes);
// router.use('/dashboard', dashboardRoutes);
router.use('/api', apiRoutes);

router.use((req, res) => {
    res.status(404).end();
});

module.exports = router;