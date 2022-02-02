const router = require('express').Router();
const { Restaurant, Reservation } = require('../../models');
const sequelize = require('../../config/connection');

// get all users
router.get('/', (req, res) => {
  console.log('======================');
  Restaurant.findAll({
    include: [
      // Discuss what to include
      {
        model: Reservation,
        attributes: ['party_size', 'time_slot']
      }
    ]
  })
    .then(dbPostData => res.json(dbPostData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get('/:id', (req, res) => {
  Restaurant.findOne({
    where: {
      id: req.params.id
    },
    include: [
      // discuss what to include
      {
        model: Reservation,
        attributes: ['party_size', 'time_slot']
      }
    ]
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
  Restaurant.create({
    occupancy: req.body.occupancy,
    business_name: req.body.business_name,
    business_address: req.body.business_address,
    business_phone: req.body.business_phone,
    business_hours_open: req.body.business_hours_open,
    business_hours_close: req.body.business_hours_close,
    business_website: req.body.business_website
  })
    .then(dbPostData => res.json(dbPostData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.put('/:id', (req, res) => {
  Restaurant.update(req.body, {
    individualHooks: true,
    where: {
      id: req.params.id
    }
  }
  )
    .then(dbPostData => {
      if (!dbPostData) {
        res.status(404).json({ message: 'No restaurant found with this id' });
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
  Restaurant.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(dbPostData => {
      if (!dbPostData) {
        res.status(404).json({ message: 'No restaurant found with this id' });
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