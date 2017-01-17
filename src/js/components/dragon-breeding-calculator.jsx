import React from 'react';
import DragonPicker from './dragon-picker';
import DragonTable from './dragon-table';
import ElementIcon from './element-icon';
import DragonElements from './dragon-elements';
import dragons from '../data/dragons.csv';
import breedingCalculator from '../actions/breeding-calculator';
import convert from '../actions/dragon-parser';

export default class DragonBreedingCalculator extends React.Component {
  constructor() {
    super();
    this.state = {
      leftDragon: null,
      rightDragon: null,
      breedingResult: [],
      dragons: convert(dragons),
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
    if ((leftDragon != null) && (rightDragon != null)) {
      this.setState({ breedingResult: breedingCalculator(this.state.dragons, leftDragon, rightDragon) });
    }
  };

  leftDragonElements = () =>
    this.state.leftDragon != null ? this.state.dragons[this.state.leftDragon].elements : [];
  rightDragonElements = () =>
    this.state.rightDragon != null ? this.state.dragons[this.state.rightDragon].elements : [];

  render() {
    return (
      <div className="container">
        <h1>Dragonvale World Breeding Calculator</h1>
        <div className="row">
          <div className="col-xs-6">
            <DragonPicker
              dragons={this.state.dragons}
              value={this.state.leftDragon}
              onChange={this.handleChangeLeftDragon}
            />
            <DragonElements elements={this.leftDragonElements()} />
          </div>
          <div className="col-xs-6">
            <DragonPicker
              dragons={this.state.dragons}
              value={this.state.rightDragon}
              onChange={this.handleChangeRightDragon}
            />
            <DragonElements elements={this.rightDragonElements()} />
          </div>
        </div>
        <DragonTable dragons={this.state.breedingResult} />
      </div>
    );
  }
}
