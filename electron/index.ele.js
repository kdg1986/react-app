import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from '@ELECTRON/layout';
import { Provider } from 'react-redux';
import store from '@/store';

window.ipcRenderer.send('asynchronous-message', 'ping')

ReactDOM.render(
  /*<React.StrictMode>*/
    <Provider store={store}>
      <BrowserRouter>
          <App/> 
      </BrowserRouter>
    </Provider>
  /*</React.StrictMode>*/,
  document.getElementById('root')
);
