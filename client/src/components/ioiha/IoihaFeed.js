import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteIoiha } from '../../actions/ioihaActions';

class Ioihas extends Component {

  onDeleteClick(id) {
    this.props.deleteIoiha(id);
  }

  render() {
    const ioihaData = this.props.ioihas.map(ioi => (
      <tr key={ioi._id}>
        <td>{ioi.make}</td>
        <td>{ioi.model}</td>
        <td>{ioi.style}</td>
        <td>{ioi.score}</td>
        <td>{ioi.prescriptiveFormula}</td>
        <td><button onClick={this.onDeleteClick.bind(this, ioi._id)} className='btn btn-info'>
          <i class="far fa-edit"></i>
        </button></td>
        <td><button onClick={this.onDeleteClick.bind(this, ioi._id)} className='btn btn-danger'>
          <i class="far fa-times-circle"></i>
        </button></td>
      </tr>
    ))
    return (
      <div>
        <h4 className='mb-4'>Ioiha Data</h4>
        <table className='table'>
          <thead>
            <tr>
              <th>Make</th>
              <th>Model</th>
              <th>Style</th>
              <th>Score</th>
              <th>Prescriptive Formula</th>
              <th></th>
              <th></th>
            </tr>
              {ioihaData}
          </thead>
        </table>
      </div>
    )
  }
}

Ioihas.propTypes = {
  deleteIoiha: PropTypes.func.isRequired
}

export default connect(null, { deleteIoiha })(Ioihas)
