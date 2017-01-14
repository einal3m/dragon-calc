import React from 'react';
import DragonPicker from './dragon-picker';

export default class DragonBreedingCalculator extends React.Component {
  render() {
    return (
      <div className="container">
        <h1>This is the title</h1>
        <div className="row">
          <div className="col-xs-6"><DragonPicker /></div>
          <div className="col-xs-6"><DragonPicker /></div>
        </div>
      </div>
    );
  }
}
