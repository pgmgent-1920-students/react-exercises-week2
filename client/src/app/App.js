import React from 'react';
import './App.css';
import { CaseList } from './components/cases';
import { Lamp, DimmedLamp } from './components/lights';

const App = () => {
  return (
    <div className="app"> 
      <div className="container">
        <CaseList />
      </div>  
      <div className="container">
        <Lamp />
      </div>  
      <div className="container">
        <DimmedLamp />
      </div>      
    </div>
  );
};

export default App;
