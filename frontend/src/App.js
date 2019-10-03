import React from 'react'; //useState para pegar informações da DOM, ao inves o
import Routes from './routes';

import logo from './assets/logo.svg';
import './App.css';

function App() {
  return (
    
    <div className="container">
      
      <img src={ logo } alt="log airCnc"/>
      
      <div className="content">
        <Routes />   

      </div>
    </div>
  );
}

export default App;