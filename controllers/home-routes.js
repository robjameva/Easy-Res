const router = require('express').Router();
const sequelize = require('../config/connection');
const { Reservation, Restaurant, User } = require('../models');
const { format_business_hours } = require('../utils/helpers')

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

router.get('/:id', (req, res) => {
    Restaurant.findOne({
        where: {
            id: req.params.id
        },
        include: [
            {
                model: Reservation,
                attributes: ['party_size', 'time_slot']
            }
        ]
    })
        .then(dbRestaurantData => {

            console.log(dbRestaurantData)
            const formattedBusinessHours = format_business_hours(dbRestaurantData.getBusinessHours())
            const restaurant = dbRestaurantData.get({ plain: true })

            console.log(formattedBusinessHours)
            console.log(restaurant)
            res.render('restaurant-detail', {
                restaurant,
                formattedBusinessHours
                // loggedIn: req.session.loggedIn
            })
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.get('/dashboard/restaurant', (req, res) => {
    res.render('restaurant-signup')
});

module.exports = router;