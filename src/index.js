
import './index.css';
import reportWebVitals from './reportWebVitals';
import state from './Redux/state'
import { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { addPost, addFieldPost, subscribe } from './Redux/state'

const renderTree = (state) => {
    ReactDOM.render(
        <StrictMode>
          <App appState={state} addPost={addPost} addFieldPost={addFieldPost} />
        </StrictMode>,
        document.getElementById('root')
      );
}

renderTree(state)

subscribe(renderTree)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
