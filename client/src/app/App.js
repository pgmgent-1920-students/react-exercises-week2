import React from 'react';
import './App.css';
import { CaseList } from './components/cases';
import { Lamp } from './components/lights';

const App = () => {
  return (
    <div className="app"> 
      <div className="container">
        <CaseList />
      </div>  
      <div className="container">
        <Lamp />
      </div>      
    </div>
  );
};

export default App;
