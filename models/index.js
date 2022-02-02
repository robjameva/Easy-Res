// import all models
const Reservation = require('./Reservation_model');
const Restaurant = require('./Restaurant_model');
const User = require('./User_model');

// create associations
User.hasMany(Reservation, {
    foreignKey: 'user_id'
});

Reservation.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'SET NULL'
});

Reservation.belongsTo(Restaurant, {
    foreignKey: 'restaurant_id',
    onDelete: 'SET NULL'
});

module.exports = { Reservation, Restaurant, User };
