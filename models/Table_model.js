const { Model, DataTypes } = require('sequelize')
const sequelize = require('../config/connection')

class Table extends Model { }

Table.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        restaurant_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'restaurant',
                key: 'id'
            }
        },
        reservation_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'reservation',
                key: 'id'
            }
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'table'
    }
);

module.exports = Table;