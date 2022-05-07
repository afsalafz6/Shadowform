import React from 'react';
import ReactDOM from 'react-dom';

import App from '@pwd/App';

// import './assets/styles/style.sass';
import '@styles/app.scss'

ReactDOM.render(<App />, document.getElementById('root'));

// Check if hot reloading is enable. If it is, changes won't reload the page.
// This is related to webpack-dev-server and works on development only.
if (module.hot) {
  module.hot.accept();
}
