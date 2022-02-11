const { Reservation } = require('../models');

function wipeReservations() {
    Reservation.destroy({
        where: {},
        truncate: true
    })
        .then(dbPostData => {
            console.log('wiped');
        })
}
wipeReservations();
