const router = require('express').Router();
const sequelize = require('../config/connection');
const { Restaurant } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', (req, res) => {
    console.log('======================');
    Restaurant.findAll({
        where: {
            user_id: 1
        }
    })
        .then(dbRestaurantData => {
            const restaurants = dbRestaurantData.map(restaurant => restaurant.get({ plain: true }));
            console.log(restaurants);
            res.render('owner', {
                layout: 'main-secondary',
                restaurants,
                // loggedIn: true
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.get('/edit/:id', /*withAuth,*/ (req, res) => {
    Restaurant.findByPk(req.params.id, {})
        .then(dbRestaurantData => {
            if (dbRestaurantData) {
                const restaurants = dbRestaurantData.get({ plain: true });

                res.render('edit-restaurant', {
                    layout: 'main-secondary',
                    restaurants,
                    // loggedIn: true
                });
            } else {
                res.status(404).end();
            }
        })
        .catch(err => {
            res.status(500).json(err);
        });
});

router.get('/edit_restaurant/:id', /*withAuth,*/ (req, res) => {
    Restaurant.findByPk(req.params.id, {})
        .then(dbRestaurantData => {
            if (dbRestaurantData) {
                const restaurants = dbRestaurantData.get({ plain: true });

                res.render('edit-restaurant', {
                    layout: 'main-secondary',
                    restaurants,
                    // loggedIn: true
                });
            } else {
                res.status(404).end();
            }
        })
        .catch(err => {
            res.status(500).json(err);
        });
});

module.exports = router;