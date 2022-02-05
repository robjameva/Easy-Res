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

User.hasMany(Restaurant, {
    foreignKey: 'user_id'
});

Restaurant.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'setNull'
})

Restaurant.hasMany(Reservation, {
    foreignKey: 'restaurant_id'
});

Reservation.belongsTo(Restaurant, {
    foreignKey: 'restaurant_id',
    onDelete: 'SET NULL'
});

module.exports = { Reservation, Restaurant, User };
