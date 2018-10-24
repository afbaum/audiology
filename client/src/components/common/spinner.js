import React from 'react';
import loading from './batteries.jpeg';

export default () => {
  return (
    <div>
      <img
        src={loading}
        style={{width: '200px', margin: 'auto', display: 'block'}}
        alt="loading . . . "/>
    </div>
  )
}
