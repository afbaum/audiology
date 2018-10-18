const validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateProfileEducation(data){
  let errors = {};

  data.school = !isEmpty(data.school) ? data.school : '';
  data.degree = !isEmpty(data.degree) ? data.degree : '';
  data.fieldofstudy = !isEmpty(data.fieldofstudy) ? data.fieldofstudy : '';
  data.from = !isEmpty(data.from) ? data.from : '';


  if(validator.isEmpty(data.school)){
    errors.school = 'Please enter a school';
  }

  if(validator.isEmpty(data.degree)){
    errors.degree = 'Please enter a degree';
  }

  if(validator.isEmpty(data.fieldofstudy)){
    errors.fieldofstudy = 'PLease enter a field of study';
  }

  if(validator.isEmpty(data.from)){
    errors.from = 'Start date is required';
  }


  return {
    errors,
    isValid: isEmpty(errors)
  }
}
