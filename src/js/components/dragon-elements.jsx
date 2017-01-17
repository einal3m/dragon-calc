import React, { PropTypes } from 'react';
import ElementIcon from './element-icon';

const DragonElements = (props) => {
  const renderElements = () => props.elements.map(element => <ElementIcon key={element} element={element} />);

  return (
    <div>
      {renderElements()}
    </div>
  );
};

export default DragonElements;

DragonElements.PropTypes = {
  elements: PropTypes.arrayOf(PropTypes.string.isRequired),
};

DragonElements.defaultProps = {
  elements: [],
}