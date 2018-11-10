import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import IoihaForm from './IoihaForm.js';
// import IoihaTable from './IoihaTable.js';
import IoihaFeed from './IoihaFeed';
import { getIoihas } from '../../actions/ioihaActions'

class Ioiha extends Component {
  componentDidMount() {
    this.props.getIoihas();
  }

  render() {
    const { ioihas } = this.props.ioiha;

    return (
      <div className= 'ioiha'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-12'>
              <h1 className='display-4 text-center'>Ioiha Data</h1>
              <hr />
              <p className='lead text-center'>
              Enter, update and review Ioiha data
              </p>
              <IoihaForm />
              <IoihaFeed ioihas = {ioihas} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

Ioiha.propTypes = {
  getIoihas: PropTypes.func.isRequired,
  ioiha: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  ioiha: state.ioiha
});

export default connect(mapStateToProps, { getIoihas })(Ioiha);
