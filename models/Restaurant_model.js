const { Model, DataTypes } = require('sequelize')
const sequelize = require('../config/connection')

class Restaurant extends Model {
    getBusinessHours() {
        const open = parseInt(this.business_hours_open);
        const close = parseInt(this.business_hours_close);
        let operatingHours = []

        for (let i = open; i < close + 1; i++) {
            operatingHours.push(i)
        }

        return operatingHours
    }
}

Restaurant.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        occupancy: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        business_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
            }
        },
        business_address: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
            }
        },
        business_phone: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
            }
        },
        business_hours_open: {
            type: DataTypes.STRING,
            allowNull: false
        },
        business_hours_close: {
            type: DataTypes.STRING,
            allowNull: false
        },
        business_website: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isUrl: true
            }
        },
        business_image: {
            type: DataTypes.STRING
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: 'user',
                key: 'id'
            }
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'restaurant'
    }
);

module.exports = Restaurant;