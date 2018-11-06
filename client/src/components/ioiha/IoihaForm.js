import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import TextFieldGroup from '../common/TextFieldGroup';
import { addIoiha } from '../../actions/ioihaActions.js';

class IoihaForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      make: '',
      model: '',
      score: '',
      prescriptiveFormula: '',
      errors: {}
    };

    this.onChange= this.onChange.bind(this);
    this.onSubmit= this.onSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.errors) {
      this.setState({errors: nextProps.errors})
    }
  }

  onSubmit(e) {
    e.preventDefault();

    const { user } = this.props.auth;

    const newIoiha = {
      make: this.state.make,
      model: this.state.model,
      style: this.state.style,
      score: this.state.score,
      prescriptiveFormula: this.state.prescriptiveFormula
    };

    this.props.addIoiha(newIoiha);
     this.setState({make: '',
                    model: '',
                    style: '',
                    score: '',
                    prescriptiveFormula: ''});
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value});
  }

  render() {
    const { errors } = this.state;

    return (
      <div className='ioiha pt-4 pb-4'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-12'>
              <h1 className='text-center'>Enter Ioiha Data</h1>
              <form onSubmit={this.onSubmit}>
                <TextFieldGroup
                  placeholder='Hearing Aid Make'
                  name='make'
                  value={this.state.make}
                  onChange={this.onChange}
                  error={errors.make}
                />
                <TextFieldGroup
                  placeholder='Hearing Aid Model'
                  name='model'
                  value={this.state.model}
                  onChange={this.onChange}
                  error={errors.model}
                />
                <TextFieldGroup
                  placeholder='Hearing Aid Style'
                  name='style'
                  value={this.state.style}
                  onChange={this.onChange}
                  error={errors.style}
                />
                <TextFieldGroup
                  placeholder='Ioiha Score'
                  name='score'
                  value={this.state.score}
                  onChange={this.onChange}
                  error={errors.score}
                />
                <TextFieldGroup
                  placeholder='Prescriptive Formula Used'
                  name='prescriptiveFormula'
                  value={this.state.prescriptiveFormula}
                  onChange={this.onChange}
                  error={errors.prescriptiveFormula}
                />
              <input type='submit' value='Submit' className='btn btn-info btn-block mt-4' />
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

IoihaForm.propTypes = {
  addIoiha: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(mapStateToProps, { addIoiha })(IoihaForm);
