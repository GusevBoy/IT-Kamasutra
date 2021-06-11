
import './index.css';
import reportWebVitals from './reportWebVitals';
import { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from './Redux/redux-store'
import StoreContext from './StoreContext';
const renderTree = () => {
    ReactDOM.render(
        <StrictMode>
          <StoreContext.Provider value={store}>
              <App />
          </StoreContext.Provider>
        </StrictMode>,
        document.getElementById('root')
      );
}

renderTree()

store.subscribe(() => renderTree())

reportWebVitals();
