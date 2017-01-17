import React, { PropTypes } from 'react';
import dragonIcons from '../data/dragon-icons';

const ElementIcon = props => <img src={dragonIcons[props.element]} alt={props.element} />;

ElementIcon.PropTypes = {
  element: PropTypes.string.isRequired,
};

export default ElementIcon;
