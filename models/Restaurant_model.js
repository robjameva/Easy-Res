const { Model, DataTypes } = require('sequelize')
const sequelize = require('../config/connection')

class Restaurant extends Model { }

Restaurant.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        business_name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                notEmpty: true,
            }
        },
        business_address: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                notEmpty: true,
            }
        },
        business_phone: {
            type: DataTypes.INTEGER,
            allowNull: false,
            unique: true,
            validate: {
                notEmpty: true,
            }
        },
        business_hours: {
            type: DataTypes.STRING,
            allowNull: false
        },
        business_website: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isUrl: true
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