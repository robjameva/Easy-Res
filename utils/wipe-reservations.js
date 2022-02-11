const { Reservation, Restaurant } = require('../models');
const sequelize = require('../config/connection');

function wipeReservations() {
    Reservation.destroy({
        where: {},
        truncate: true
    })
        .then(dbPostData => {
            console.log(dbPostData);
            console.log('wiped');
        })
}
wipeReservations();
