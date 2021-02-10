import { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { addPost, addFieldPost } from './Redux/state'
const renderTree = (state) => {
    ReactDOM.render(
        <StrictMode>
          <App appState={state} addPost={addPost} addFieldPost={addFieldPost} />
        </StrictMode>,
        document.getElementById('root')
      );
}

export default renderTree;
