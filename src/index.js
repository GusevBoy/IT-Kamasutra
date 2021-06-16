
import './index.css';
import reportWebVitals from './reportWebVitals';
import { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from './Redux/redux-store'
import { Provider } from 'react-redux';

const renderTree = () => {
    ReactDOM.render(
        <StrictMode>
          <Provider store={store}>
            <App />
          </Provider>
        </StrictMode>,
        document.getElementById('root')
      );
}

renderTree()

store.subscribe(() => renderTree())

reportWebVitals();
