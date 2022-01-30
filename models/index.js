// import all models
const Reservation = require('./Reservation_model');
const Restaurant = require('.//Restaurant_model');
const Table = require('./Table_model');
const User = require('./User_model');

// create associations
User.hasMany(Reservation, {
    foreignKey: 'user_id'
});

Reservation.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'SET NULL'
});

Reservation.belongsToMany(Table, {
    foreignKey: 'reservation_id',
    onDelete: 'SET NULL'
});

Table.belongsToMany(Reservation, {
    foreignKey: 'table_id',
    onDelete: 'SET NULL'
});

Table.belongsTo(Restaurant, {
    foreignKey: 'restaurant_id',
    onDelete: 'SET NULL'
});

Restaurant.hasMany(Table, {
    foreignKey: 'restaurant_id',
    onDelete: 'SET NULL'
});


module.exports = { Reservation, Restaurant, Table, Comment };
