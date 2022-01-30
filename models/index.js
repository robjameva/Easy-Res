// import all models
const Reservation = require('./Reservation_model');
const Restaurant = require('./Restaurant_model');
const Table = require('./Table_model');
const User = require('./User_model');

// // create associations
// User.hasMany(Reservation, {
//     foreignKey: 'user_id'
// });

// Reservation.belongsTo(User, {
//     foreignKey: 'user_id',
//     onDelete: 'SET NULL'
// });

// User.belongsToMany(Table, {
//     through: Reservation,
//     as: 'reserved_table',
//     foreignKey: 'user_id',
//     onDelete: 'SET NULL'
// });

// Table.belongsToMany(User, {
//     through: Reservation,
//     as: 'reserved_table',
//     foreignKey: 'table_id',
//     onDelete: 'SET NULL'
// });

// Table.belongsTo(Restaurant, {
//     foreignKey: 'restaurant_id',
//     onDelete: 'SET NULL'
// });

// Restaurant.hasMany(Table, {
//     foreignKey: 'restaurant_id',
//     onDelete: 'SET NULL'
// });

module.exports = { Reservation, Restaurant, Table, User };
