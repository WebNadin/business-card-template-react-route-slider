import 'bootstrap/dist/css/bootstrap.min.css';
/*import $ from '../node_modules/jQuery/lib/node-jquery.js';*/
import React from 'react';
import ReactDOM from 'react-dom';
import "./scss/index.scss";
/*import $ from "jquery";*/
import App from './App';
import * as serviceWorker from './serviceWorker';

import { BrowserRouter } from 'react-router-dom';

ReactDOM.render((
    <BrowserRouter>
        <App />
    </BrowserRouter>
), document.getElementById('root'));

serviceWorker.unregister();

