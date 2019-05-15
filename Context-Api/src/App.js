import React from 'react';
import './App.css';
import Header from './components/Header';
import Contacts from './components/Contacts';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from './context';

function App() {
  return (
    <Provider>
      <Header branding="Contact Manager" />
      <div className="container">
        <Contacts />
      </div>

    </Provider>
  );
}

export default App;
