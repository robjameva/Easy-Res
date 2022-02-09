const { Model, DataTypes } = require('sequelize')
const sequelize = require('../config/connection')


class Reservation extends Model {
    getBusinessHours() {
        const open = parseInt(this.restaurant.business_hours_open);
        const close = parseInt(this.restaurant.business_hours_close);
        let operatingHours = []

        for (let i = open; i < close + 1; i++) {
            operatingHours.push(i)
        }

        return operatingHours
    }
}

Reservation.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        party_size: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        time_slot: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id'
            }
        },
        restaurant_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'restaurant',
                key: 'id'
            }
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'reservation'
    }
);

module.exports = Reservation;