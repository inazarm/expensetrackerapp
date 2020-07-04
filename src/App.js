import React from 'react';
import logo from './logo.svg';
import './App.css';

//import Components
import {Header} from './components/Header';
import { Balance  } from './components/Balance';
import { AccountSummary } from './components/AccountSummary';

function App() {
  return (
    <div>
      <Header/>
      <div className="container">
          <Balance/>
          <AccountSummary/>
      </div>
    </div>
  );
}

export default App;
