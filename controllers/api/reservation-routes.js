const router = require('express').Router();
const { Reservation, Restaurant } = require('../../models');
const sequelize = require('../../config/connection');

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

    party_size: req.body.party_size,
    user_id: req.body.user_id,
    time_slot: req.body.time_slot,
    restaurant_id: req.body.restaurant_id
  })
    .then(dbPostData => res.json(dbPostData))
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