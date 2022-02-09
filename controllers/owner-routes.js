const router = require('express').Router();
const sequelize = require('../config/connection');
const { Restaurant, User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', withAuth, (req, res) => {
    console.log('======================');
    Restaurant.findAll({
        where: {
            user_id: req.session.user_id
        },
        include: [
            {
                model: User,
                attributes: ['first_name']
            }
        ]
    })
        .then(dbRestaurantData => {
            const restaurants = dbRestaurantData.map(restaurant => restaurant.get({ plain: true }));
            console.log(restaurants)
            res.render('owner', {
                layout: 'main-secondary',
                restaurants,
                first_name: req.session.first_name,
                loggedIn: true
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.get('/edit/:id', withAuth, (req, res) => {
    Restaurant.findByPk(req.params.id, {})
        .then(dbRestaurantData => {
            if (dbRestaurantData) {
                const restaurants = dbRestaurantData.get({ plain: true });

                res.render('edit-restaurant', {
                    layout: 'main-secondary',
                    restaurants,
                    first_name: req.session.first_name,
                    loggedIn: true
                });
            } else {
                res.status(404).end();
            }
        })
        .catch(err => {
            res.status(500).json(err);
        });
});

router.get('/restaurant_signup', withAuth, (req, res) => {
    res.render('restaurant-signup', {
        layout: 'main-secondary',
        first_name: req.session.first_name,
        loggedIn: true
    })
});

module.exports = router;