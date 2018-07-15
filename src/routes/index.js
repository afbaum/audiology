// src/routes/index.js
const express = require('express');
const router = express.Router();
const mongoose = require("mongoose");

let aids = require('../models/hearingaids.model.js')

//display json on webpage
router.get('/hearingaids', function(req, res, next) {
  mongoose.model("Aid").find({ deleted: {$ne: true}}, function(err, aids) {
    if (err) {
      console.log(err);
      return res.status(500).json(err);
    }
    res.json(aids);
  });
});

router.post('/hearingaids', (req, res, next) => {

  //create object with form input
  const haData = {
    make: req.body.make,
    model: req.body.model,
    style: req.body.style,
    ioiha: req.body.ioiha
  };

  //use shcema's create method to insert document into mongodb
  aids.create(haData, function (err, newAids) {
    if(err) {
      console.error(err)
      return res.status(500).json(err)
    } else {
      return res.redirect('/api/hearingaids');
    }

    res.json(newAids)
  })
});

router.put('/hearingiads/:aidId', (req, res, next) => {
  const {aidId} = req.params.aidID;

  aids.findById(aidId, function (err, aids) {
    if (err) {
      console.error(err)
      return res.status(500).json(err)
    }
    if (!aids) {
      return res.status(404).json({message: 'Hearing Aid Not Found'})
    }

    aids.make = req.body.make;
    aids.style = req.body.style;
    aids.model = req.body.model;

    aids.save(function (err, savedAids) {
      if (err) {
        console.error(err)
        return res.status(500).json(err)
      }
      res.json(savedAids)
    })
  });
});

router.delete('/hearingaids/:aidId', function (req, res, next) {
  const aidId = req.params.shirtId

  aids.findById(aidId, function (err, shirt) {
    if (err) {
      console.log(err)
      return res.status(500).json(err)
    }
    if (!aids) {
      return res.status(404).json({message: 'Data not found'})
    }

    aids.deleted = true

    aids.save(function (err, doomedShirt) {
      res.json(doomedShirt)
    })
  })
})

module.exports = router;
