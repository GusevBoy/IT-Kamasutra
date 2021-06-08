
import './index.css';
import reportWebVitals from './reportWebVitals';
import { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from './Redux/store'
const renderTree = (state) => {
    ReactDOM.render(
        <StrictMode>
          <App state={state} dispatch={store.dispatch.bind(store)} />
        </StrictMode>,
        document.getElementById('root')
      );
}

renderTree(store.getState())

store.subscribe(renderTree)

reportWebVitals();
