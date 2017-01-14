import React, { PropTypes } from 'react';

export default class DragonPicker extends React.Component {
  handleChange = (event) => this.props.onChange(event.target.value);

  renderOptions() {
    const options = this.props.dragons.map((dragon, i) => (
      <option key={dragon.name} value={i}>{dragon.name}</option>
    ));

    if (!this.props.value) {
      options.unshift(<option key="Placeholder" value={-1} disabled>Please select...</option>);
    }

    return options;
  }

  render() {
    return (
      <select className="form-control" value={this.props.value || -1} onChange={this.handleChange}>
        {this.renderOptions()}
      </select>
    );
  }
}

DragonPicker.propTypes = {
  value: PropTypes.number,
  dragons: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
  })),
  onChange: PropTypes.func.isRequired,
};

DragonPicker.defaultProps = {
  dragons: [],
  value: null,
};
