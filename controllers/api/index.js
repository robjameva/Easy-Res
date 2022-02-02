const router = require('express').Router();
const userRoutes = require('./user-routes.js');
const restaurantRoutes = require('./restaurant-routes.js');
const reservationRoutes = require('./reservation-routes');

router.use('/users', userRoutes);
router.use('/restaurant', restaurantRoutes);
router.use('/reservation', reservationRoutes);


module.exports = router;