import React from 'react';
import ReactDOM from 'react-dom';

import DragonBreedingCalculator from './dragon-breeding-calculator.jsx';

require("./style.css");
require('babel-polyfill');

ReactDOM.render(<DragonBreedingCalculator/>, document.getElementById('container'));
