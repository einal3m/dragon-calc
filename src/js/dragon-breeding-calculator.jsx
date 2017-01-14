import React from 'react';
import DragonPicker from './dragon-picker';
import DragonTable from './dragon-table';
import dragons from '../data/dragons';
import breedingCalculator from '../actions/breeding-calculator';

export default class DragonBreedingCalculator extends React.Component {
  constructor() {
    super();
    this.state = {
      leftDragon: null,
      rightDragon: null,
      breedingResult: [],
    };
  }

  handleChangeLeftDragon = (dragonIndex) => {
    this.setState({ leftDragon: dragonIndex });
    this.calculate(dragonIndex, this.state.rightDragon);
  };

  handleChangeRightDragon = (dragonIndex) => {
    this.setState({ rightDragon: dragonIndex });
    this.calculate(this.state.leftDragon, dragonIndex);
  };

  calculate = (leftDragon, rightDragon) => {
    if (leftDragon && rightDragon) {
      this.setState({ breedingResult: breedingCalculator(leftDragon, rightDragon) });
    }
  };

  render() {
    return (
      <div className="container">
        <h1>Dragonvale World Breeding Calculator</h1>
        <div className="row">
          <div className="col-xs-6">
            <DragonPicker
              dragons={dragons}
              value={this.state.leftDragon}
              onChange={this.handleChangeLeftDragon}
            />
          </div>
          <div className="col-xs-6">
            <DragonPicker
              dragons={dragons}
              value={this.state.rightDragon}
              onChange={this.handleChangeRightDragon}
            />
          </div>
        </div>
        <DragonTable dragons={this.state.breedingResult} />
      </div>
    );
  }
}
