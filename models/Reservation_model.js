const { Model, DataTypes } = require('sequelize')
const sequelize = require('../config/connection')


class Reservation extends Model { }

Reservation.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        table_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'restaurant_table',
                key: 'id'
            }
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id'
            }
        },
        twelve_am: {
            type: DataTypes.TINYINT,
            defaultValue: 0
        },
        one_am: {
            type: DataTypes.TINYINT,
            defaultValue: 0
        },
        two_am: {
            type: DataTypes.TINYINT,
            defaultValue: 0
        },
        three_am: {
            type: DataTypes.TINYINT,
            defaultValue: 0
        },
        four_am: {
            type: DataTypes.TINYINT,
            defaultValue: 0
        },
        five_am: {
            type: DataTypes.TINYINT,
            defaultValue: 0
        },
        six_am: {
            type: DataTypes.TINYINT,
            defaultValue: 0
        },
        seven_am: {
            type: DataTypes.TINYINT,
            defaultValue: 0
        },
        eight_am: {
            type: DataTypes.TINYINT,
            defaultValue: 0
        },
        nine_am: {
            type: DataTypes.TINYINT,
            defaultValue: 0
        },
        ten_am: {
            type: DataTypes.TINYINT,
            defaultValue: 0
        },
        eleven_am: {
            type: DataTypes.TINYINT,
            defaultValue: 0
        },
        twelve_pm: {
            type: DataTypes.TINYINT,
            defaultValue: 0
        },
        one_pm: {
            type: DataTypes.TINYINT,
            defaultValue: 0
        },
        two_pm: {
            type: DataTypes.TINYINT,
            defaultValue: 0
        },
        three_pm: {
            type: DataTypes.TINYINT,
            defaultValue: 0
        },
        four_pm: {
            type: DataTypes.TINYINT,
            defaultValue: 0
        },
        five_pm: {
            type: DataTypes.TINYINT,
            defaultValue: 0
        },
        six_pm: {
            type: DataTypes.TINYINT,
            defaultValue: 0
        },
        seven_pm: {
            type: DataTypes.TINYINT,
            defaultValue: 0
        },
        eight_pm: {
            type: DataTypes.TINYINT,
            defaultValue: 0
        },
        nine_pm: {
            type: DataTypes.TINYINT,
            defaultValue: 0
        },
        ten_pm: {
            type: DataTypes.TINYINT,
            defaultValue: 0
        },
        eleven_pm: {
            type: DataTypes.TINYINT,
            defaultValue: 0
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