const router = require('express').Router();
const userRoutes = require('./user-routes.js');
const postRoutes = require('./restaurant-routes.js');
const commentRoutes = require('./reservation-routes');

router.use('/users', userRoutes);
router.use('/restaurant', reataurantRoutes);
router.use('/reservation', reservationRoutes);

router.get('/', (res, req) => {
    console.log('test')
})

module.exports = router;