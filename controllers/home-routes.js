const router = require('express').Router();
const sequelize = require('../config/connection');
const { Reservation, Restaurant, User } = require('../models');

router.get('/', (req, res) => {
    Restaurant.findAll()
        .then(dbRestaurantData => {
            // pass a single post object into the homepage template
            const restaurants = dbRestaurantData.map(restaurant => restaurant.get({ plain: true }))
            res.render('homepage', {
                restaurants
                // loggedIn: req.session.loggedIn
            })
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

module.exports = router;