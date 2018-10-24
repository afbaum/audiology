const validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateIoiha(data){
  let errors = {};

  data.make = !isEmpty(data.make) ? data.make : '';
  data.style = !isEmpty(data.style) ? data.style : '';
  data.model = !isEmpty(data.model) ? data.model : '';
  data.score = !isEmpty(data.score) ? data.score : '';


  if(validator.isEmpty(data.make)){
    errors.make = 'Please enter a hearing aid make';
  }

  if(validator.isEmpty(data.style)){
    errors.style = 'Please enter a hearing aid style';
  }

  if(validator.isEmpty(data.model)){
    errors.model = 'PLease enter a hearing aid model';
  }

  if(validator.isEmpty(data.score)){
    errors.score = 'Please enter an IOIHA score';
  }


  return {
    errors,
    isValid: isEmpty(errors)
  }
}
