const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

// Load Input Validation
const validateIoiha = require('../../validation/ioiha');

// Load Ioiha model
const Ioiha = require('../../models/Ioiha');

// @route   GET api/posts/test
// @desc    Tests post route
// @access  Public
router.get('/test', (req, res) => res.json({msg: 'Post Works'}));

router.post('/', passport.authenticate('jwt', { session: false }), (req, res) => {
  const { errors, isValid } = validateIoiha(req.body);

  // Check Validation
  if(!isValid) {
    // Return any errors with 400 status
    return res.status(400).json(errors);
  }

// get ioiha information from from
  const ioihaData = {
    make: req.body.make,
    model: req.body.model,
    style: req.body.style,
    score: req.body.score,
    verification: req.body.verification,
    prescriptiveFormula: req.body.prescriptiveFormula
  };

  // Save Profile
  new Ioiha(ioihaData)
    .save()
    .then(ioiha => res.json(ioiha));
});

module.exports = router;
