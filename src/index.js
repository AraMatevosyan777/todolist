import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'mobx-react';
import todo from './mobx/store';

// const stores = {
//   todo
// };

ReactDOM.render(
  <React.StrictMode>
    {/* <Provider {...stores}> */}
      <App />
    {/* </Provider> */}
  </React.StrictMode>,
  document.getElementById('root')
);
