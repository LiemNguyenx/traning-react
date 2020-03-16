import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './views/App.jsx';

import store from './js/store/index';
import { addArticle } from './js/actions/index';

window.store = store;
window.addArticle = addArticle;

ReactDOM.render(<App />, document.getElementById('app'));