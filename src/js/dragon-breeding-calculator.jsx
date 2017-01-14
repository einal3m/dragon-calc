import React from 'react';
import DragonPicker from './dragon-picker';
import dragons from '../data/dragons';

export default class DragonBreedingCalculator extends React.Component {
  render() {
    return (
      <div className="container">
        <h1>This is the title</h1>
        <div className="row">
          <div className="col-xs-6"><DragonPicker dragons={dragons} /></div>
          <div className="col-xs-6"><DragonPicker dragons={dragons} /></div>
        </div>
      </div>
    );
  }
}
