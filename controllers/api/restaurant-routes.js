const router = require('express').Router();
const { Restaurant } = require('../../models');

// get all users
router.get('/', (req, res) => {
  console.log('======================');
  Restaurant.findAll({
    attributes: [
        'business_name',
        'business_address',
        'business_phone',
        'business_hours',
        'business_website'
    ],
    include: [
      // Discuss what to include
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
    attributes: [
      'business_name',
      'business_address',
      'business_phone',
      'business_hours',
      'business_website'
    ],
    include: [
      // discuss what to include
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

router.post('/', withAuth, (req, res) => {
  Restaurant.create({
      business_name: req.body.business_name,
      business_address: req.body.business_address,
      business_phone: req.body.business_phone,
      business_hours: req.body.business_hours,
      business_website: req.body.business_website
  })
    .then(dbPostData => res.json(dbPostData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.put('/:id', withAuth, (req, res) => {
  Restaurant.update(
    {
      business_name: req.body.business_name,
      business_address: req.body.business_address,
      business_phone: req.body.business_phone,
      business_hours: req.body.business_hours,
      business_website: req.body.business_website
    },
    {
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