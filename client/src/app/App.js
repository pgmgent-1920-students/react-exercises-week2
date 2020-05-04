import React from 'react';
import './App.css';
import { CaseList } from './components/cases';

const App = () => {
  return (
    <div className="app"> 
      <div className="container">
        <CaseList />
      </div>      
    </div>
  );
};

export default App;
