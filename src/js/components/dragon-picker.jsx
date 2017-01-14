import React, { PropTypes } from 'react';

export default class DragonPicker extends React.Component {
  renderOptions() {
    return this.props.dragons.map((dragon, i) => (
      <option key={dragon.name} value={i}>{dragon.name}</option>
    ));
  }

  render() {
    return (
      <select className="form-control">
        {this.renderOptions()}
      </select>
    );
  }
}

DragonPicker.propTypes = {
  dragons: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
  })),
};

DragonPicker.defaultProps = {
  dragons: [],
};
