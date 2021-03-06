const router = require('express').Router();
const sequelize = require('../config/connection');
const { Restaurant, Reservation, User } = require('../models');
const withAuth = require('../utils/auth');
const { format_business_hours } = require('../utils/helpers');


router.get('/', withAuth, (req, res) => {
    Reservation.findAll({
        where: {
            user_id: req.session.user_id
        },
        attributes: [
            'id',
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
            const reservations = dbReservationData.map(reservation => reservation.get({ plain: true }));

            reservations.forEach(reservation => reservation.time_slot = format_business_hours([reservation.time_slot]))

            res.render('dashboard', {
                layout: 'main-secondary',
                reservations,
                user_id: req.session.user_id,
                first_name: req.session.first_name,
                loggedIn: true
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.get('/edit_reservation/:id', withAuth, (req, res) => {
    Reservation.findByPk(req.params.id, {
        attributes: [
            'id',
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
                const hoursObj = {};
                const unformattedBusinessHours = dbReservationData.getBusinessHours()
                const formattedBusinessHours = format_business_hours(unformattedBusinessHours);
                unformattedBusinessHours.forEach((key, i) => hoursObj[key] = formattedBusinessHours[i])

                const reservations = dbReservationData.get({ plain: true });

                res.render('edit-reservation', {
                    layout: 'main-secondary',
                    reservations,
                    hoursObj,
                    phoneNum: req.session.phone_number,
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

router.get('/edit_user/:id', withAuth, (req, res) => {
    User.findByPk(req.params.id, {
    })
        .then(dbUserData => {
            if (dbUserData) {
                const users = dbUserData.get({ plain: true });

                res.render('edit-user', {
                    layout: 'main-secondary',
                    users,
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



module.exports = router;