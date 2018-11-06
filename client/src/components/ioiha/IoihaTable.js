import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class IoihaTable extends Component {
  render() {
    const ioihas = this.props.ioihas.map(ioi => (
      <tr>
        <td className='text-center'>{ioi.make}</td>
        <td className='text-center'>{ioi.model}</td>
        <td className='text-center'>{ioi.style}</td>
        <td className='text-center'>{ioi.score}</td>
        <td className='text-center'>{ioi.prescriptiveFormula}</td>
        <td>
          <button className='btn btn-info btn-sm'>Edit</button>
          <button className='btn btn-danger btn-sm'>Delete</button>
        </td>
      </tr>
    ))
    return (
      <div className='pt-4'>
        <h4 className='mb-4'>Ioiha Data</h4>
        <table className='table'>
          <thead>
            <tr>
              <th className='text-center'>Make</th>
              <th className='text-center'>Model</th>
              <th className='text-center'>Style</th>
              <th className='text-center'>Score</th>
              <th className='text-center'>Prescriptive Formula</th>
              <th></th>
            </tr>
              {ioihas}
          </thead>
        </table>
      </div>
    )
  }
}

export default IoihaTable
