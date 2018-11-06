const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

// Load Input Validation
const validateIoiha = require('../../validation/ioiha');

// Load Ioiha model
const Ioiha = require('../../models/Ioiha');
// Load User model
const Profile = require('../../models/Profile');

// @route   GET api/ioiha/test
// @desc    Tests post route
// @access  Public
router.get('/test', (req, res) => res.json({msg: 'Post Works'}));

// @route   GET api/ioiha/all
// @desc    Get all ioiha data
// @access  Private
router.get('/all', passport.authenticate('jwt', { session: false }), (req, res) => {
  const { errors, isValid } = validateIoiha(req.body);

  Ioiha.find()
  .then(ioihas => res.json(ioihas))
  .catch(err => res.status(404).json({ noIoihasFound: "No data found"}));
});

// @route   GET api/ioiha/:id
// @desc    Get single ioiha data
// @access  Private
router.get('/:id', passport.authenticate('jwt', { session: false }), (req, res) => {
  const { errors, isValid } = validateIoiha(req.body);

  Ioiha.findById(req.params.id)
  .then(ioiha => res.json(ioiha))
  .catch(err => res.status(404).json({ noIoihaFound: "No data found with that id"}));
});

// @route   POST api/ioiha/
// @desc    Enter ioiha data
// @access  Private
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

  // Save IOIHA data
  new Ioiha(ioihaData)
    .save()
    .then(ioiha => res.json(ioiha));
});

// @route   Delete api/ioiha/:id
// @desc    Delete ioiha data
// @access  Private
router.delete('/:id', passport.authenticate('jwt', { session: false }), (req, res) => {
  const { errors, isValid } = validateIoiha(req.body);

  Ioiha.deleteOne({ _id:req.params.id})
    .then(() => res.json({success: true}));
});


module.exports = router;
