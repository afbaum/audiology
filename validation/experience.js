const validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateExperienceInput(data){
  let errors = {};

  data.title = !isEmpty(data.title) ? data.title : '';
  data.company = !isEmpty(data.company) ? data.company : '';
  data.from = !isEmpty(data.from) ? data.from : '';


  if(validator.isEmpty(data.title)){
    errors.title = 'Please enter a job title';
  }

  if(validator.isEmpty(data.company)){
    errors.company = 'Please enter a company';
  }

  if(validator.isEmpty(data.from)){
    errors.from = 'Start date is required';
  }


  return {
    errors,
    isValid: isEmpty(errors)
  }
}
