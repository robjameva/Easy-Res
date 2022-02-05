const router = require('express').Router();
const { Restaurant, Reservation } = require('../models');
// const withAuth = require('../utils/auth');


router.get('/', (req, res) => {
    // console.log(req.session);
    console.log('======================');
    // Reservation.findAll({
    //     where: {
    //          user_id: 1
    //     },
    //     attributes: [
    //         'party_size',
    //         'time_slot',
    //     ],
    //     include: [
    //         {
    //             model: Restaurant,
    //             attributes: ['business_name', 'business_address', 'business_phone', 'business_hours_open', 'business_hours_close', 'business_website', 'business_image'],
    //         },
    //     ]
    // })
    //     .then(dbReservationData => {
    //         const reservations = dbReservationData.map(reservation => reservation.get({ plain: true }));
    //         res.render('dashboard', {
    //             layout: 'main-secondary',
    //             reservations,
    //             // loggedIn: true
    //         });
    //     })
    //     .catch(err => {
    //         console.log(err);
    //         res.status(500).json(err);
    //     });
});

router.get('/edit/:id', /*withAuth,*/ (req, res) => {
    Reservation.findByPk(req.params.id, {
        attributes: [
            'party_size',
            'time_slot',
        ],
        include: [
            {
                model: Restaurant,
                attributes: ['business_name', 'business_address', 'business_phone', 'business_hours_open', 'business_hours_close', 'business_website', 'business_image'],
            },
        ]
    })
        .then(dbReservationData => {
            if (dbReservationData) {
                const reservations = dbReservationData.get({ plain: true });

                res.render('edit-reservation', {
                    layout: 'main-secondary',
                    reservation,
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

// router.get('/', (req, res) => {
//     console.log(req.session);
//     console.log('======================');
//     Restaurant.findAll({
//         // where: {
//         //     user_id: req.session.user_id
//         // }
//     })
//         .then(dbRestaurantData => {
//             const restaurants = dbRestaurantData.map(restaurant => restaurant.get({ plain: true }));
//             res.render('dashboard', {
//                 layout: 'main-secondary',
//                 restaurants,
//                 // loggedIn: true
//             });
//         })
//         .catch(err => {
//             console.log(err);
//             res.status(500).json(err);
//         });
// });

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

module.exports = router;