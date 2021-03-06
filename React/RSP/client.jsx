import React from 'react';
import ReactDOM from 'react-dom';
import { hot } from 'react-hot-loader/root';

import Chart from './Chart';

const Hot = hot(Chart);
ReactDOM.render(<Hot />, document.querySelector('#root'));