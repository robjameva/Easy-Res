const hasReservation = (req, res, next) => {
    const reservationSection = document.querySelector("#show-reservation");
    const noReservation = document.querySelector("#no-reservation");
    
    if (!req.Reservation.user_id) {
        reservationSection.classList = 'visually-hidden';
        noReservation.textContent = "No reservation's scheduled";
        noReservation.classList = '';
    } else {
        reservationSection.classList = 'col-8 d-flex justify-content-center flex-column';
        noReservation.classList = 'visually-hidden';
        next();
    }
};

module.exports = hasReservation;