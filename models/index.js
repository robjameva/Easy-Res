// import all models
const Reservation = require('./Reservation_model');
const Restaurant = require('./Restaurant_model');
const Restaurant_table = require('./Restaurant_table_model');
const User = require('./User_model');

// create associations
User.hasMany(Reservation, {
    foreignKey: 'user_id'
});

Reservation.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'SET NULL'
});

User.belongsToMany(Restaurant_table, {
    through: Reservation,
    as: 'reserved_table',
    foreignKey: 'user_id',
    onDelete: 'SET NULL'
});

Restaurant_table.belongsToMany(User, {
    through: Reservation,
    as: 'reserved_table',
    foreignKey: 'table_id',
    onDelete: 'SET NULL'
});

Restaurant_table.belongsTo(Restaurant, {
    foreignKey: 'restaurant_id',
    onDelete: 'SET NULL'
});

Restaurant.hasMany(Restaurant_table, {
    foreignKey: 'restaurant_id',
    onDelete: 'SET NULL'
});

module.exports = { Reservation, Restaurant, Restaurant_table, User };
