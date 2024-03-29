import React from 'react';
import ReactDOM from 'react-dom';

import DragonBreedingCalculator from './js/components/dragon-breeding-calculator';

require('./css/dragon.scss');
require('babel-polyfill');

ReactDOM.render(<DragonBreedingCalculator />, document.getElementById('container'));
