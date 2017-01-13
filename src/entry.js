import React from 'react';
import ReactDOM from 'react-dom';

import DragonBreedingCalculator from './js/dragon-breeding-calculator.jsx';

require("./css/dragon.css");
require('babel-polyfill');

ReactDOM.render(<DragonBreedingCalculator/>, document.getElementById('container'));
