import React, { PropTypes } from 'react';

export default class DragonTable extends React.Component {

  renderRows() {
    return this.props.dragons.map(dragon => (
      <tr key={dragon.name}>
        <td>{dragon.name}</td>
        <td>{dragon.elements.join('/')}</td>
        <td>{dragon.breedingTime}</td>
      </tr>
    ));
  }

  render() {
    return (
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Name</th>
            <th>Types</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>
          {this.renderRows()}
        </tbody>
      </table>
    );
  }
}

DragonTable.propTypes = {
  dragons: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    elements: PropTypes.arrayOf(PropTypes.string).isRequired,
    breedingTime: PropTypes.string.isRequired,
  })),
};

DragonTable.defaultProps = {
  dragons: [],
};
