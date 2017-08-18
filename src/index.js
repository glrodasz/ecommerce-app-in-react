import React from 'react';
import ReactDOM from 'react-dom';
import HomePage from './features/home/containers/HomePage';
import registerServiceWorker from './registerServiceWorker';

import 'antd/dist/antd.css';
import './index.css';

ReactDOM.render(<HomePage />, document.getElementById('root'));
registerServiceWorker();
