import React from 'react'
import './App.css';
import HeaderConteiner from './components/Header/HeaderConteiner';
import Navigation from './components/Navigation/Navigation';
import Content from './components/Content/Content';
import { BrowserRouter } from 'react-router-dom';


const App = () => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <HeaderConteiner />
        <Navigation />
        <Content />
      </div>
    </BrowserRouter>
  );
}

export default App;
