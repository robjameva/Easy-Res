const hasRestaurant = (req, res, next) => {
    const restaurantSection = document.querySelector("#show-restaurant");

    if (!req.restaurant.user_id) {
        restaurantSection.classList = 'visually-hidden';
    } else {
        restaurantSection.classList = 'col-8 d-flex justify-content-center flex-column';
        next();
    }
};

module.exports = hasRestaurant;