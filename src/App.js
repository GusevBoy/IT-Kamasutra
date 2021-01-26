import React from 'react'
import './App.css';
import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation2';
import Content from './components/Content/Content';
import { BrowserRouter } from 'react-router-dom';


const App = ({ appState }) => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navigation />
        <Content state={appState} />
      </div>
    </BrowserRouter>
  );
}

export default App;
