require('babel-polyfill');

const testsContext = require.context('.', true, /(-test.jsx$)|(-test.js$)/);
testsContext.keys().forEach(testsContext);
