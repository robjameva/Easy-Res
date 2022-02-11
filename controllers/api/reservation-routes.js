const router = require('express').Router();
const { Reservation, Restaurant } = require('../../models');
const sequelize = require('../../config/connection');
const { format_business_hours } = require('../../utils/helpers');

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);
require('dotenv').config();

// get all users
router.get('/', (req, res) => {
  console.log('======================');
  Reservation.findAll({
  })
    .then(dbPostData => res.json(dbPostData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get('/:id', (req, res) => {
  Reservation.findOne({
    where: {
      id: req.params.id
    },
  })
    .then(dbPostData => {
      if (!dbPostData) {
        res.status(404).json({ message: 'No post found with this id' });
        return;
      }
      res.json(dbPostData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// NEW ROUTE
router.get('/reserved/:restaurant_id', (req, res) => {
  Reservation.findAll({
    where: {
      restaurant_id: req.params.restaurant_id
    },
    attributes: [
      'time_slot',
      [sequelize.fn('sum', sequelize.col('party_size')), 'total_occupancy'],
    ],
    group: ['time_slot'],
    include: [
      {
        model: Restaurant,
        attributes: ['business_name', 'occupancy']
      }
    ],
  })
    .then(dbPostData => {
      if (!dbPostData) {
        res.status(404).json({ message: 'No post found with this id' });
        return;
      }
      res.json(dbPostData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post('/', (req, res) => {
  Reservation.create({
    user_id: req.session.user_id,
    party_size: req.body.party_size,
    time_slot: req.body.time_slot,
    restaurant_id: req.body.restaurant_id
  })
    .then(dbPostData => {
      res.json(dbPostData)

      const reservedTimeSlot = [parseInt(dbPostData.dataValues.time_slot)];
      const formattedHour = format_business_hours(reservedTimeSlot);
      const partySize = dbPostData.dataValues.party_size;

      console.log('Inside create res')
      const getBusinessName = id => {
        Restaurant.findOne({
          where: {
            id: id
          }
        })
          .then(dbBusinessName => {
            console.log('Inside send text')
            client.messages
              .create({
                body:
                  `Your table is confirmed at ${dbBusinessName.dataValues.business_name} for ${partySize} people at ${formattedHour}.`,
                from: '+17853776055',
                to: `+1${req.session.phone_number}`
              })
              .then(message => console.log(message.sid));
          })
      }
      getBusinessName(dbPostData.dataValues.restaurant_id)
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.put('/:id', (req, res) => {
  Reservation.update(req.body, {
    individualHooks: true,
    where: {
      id: req.params.id
    }
  }
  )
    .then(dbPostData => {
      if (!dbPostData) {
        res.status(404).json({ message: 'No Reservation found with this id' });
        return;
      }
      res.json(dbPostData);

      const reservedTimeSlot = [parseInt(dbPostData[1][0].dataValues.time_slot)];
      const formattedHour = format_business_hours(reservedTimeSlot);
      const partySize = dbPostData[1][0].dataValues.party_size;

      const getBusinessName = id => {
        Restaurant.findOne({
          where: {
            id: id
          }
        })
          .then(dbBusinessName => {
            client.messages
              .create({
                body:
                  `Your table is confirmed at ${dbBusinessName.dataValues.business_name} for ${partySize} people at ${formattedHour}.`,
                from: '+17853776055',
                to: `+1${req.session.phone_number}`
              })
              .then(message => console.log(message.sid));
          })
      }
      getBusinessName(dbPostData[1][0].dataValues.restaurant_id)
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.delete('/:id', (req, res) => {
  console.log('id', req.params.id);
  Reservation.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(dbPostData => {
      if (!dbPostData) {
        res.status(404).json({ message: 'No Reservation found with this id' });
        return;
      }
      res.json(dbPostData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;