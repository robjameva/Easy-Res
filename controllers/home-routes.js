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
            const formattedBusinessHours = format_business_hours(dbRestaurantData.getBusinessHours());
            const unformattedBusinessHours = dbRestaurantData.getBusinessHours();
            const hoursObj = {};
            unformattedBusinessHours.forEach((key, i) => hoursObj[key] = formattedBusinessHours[i])
            console.log(hoursObj)

            const restaurant = dbRestaurantData.get({ plain: true });
            console.log(restaurant);

            console.log(formattedBusinessHours);
            console.log(unformattedBusinessHours);
            console.log(restaurant);
            res.render('restaurant-detail', {
                restaurant,
                hoursObj
                // loggedIn: req.session.loggedIn
            })
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

module.exports = router;