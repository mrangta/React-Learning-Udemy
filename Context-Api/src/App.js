import React from 'react';
import './App.css';
import Header from './components/layout/Header';
import Contacts from './components/contact/Contacts';
import AddContact from './components/contact/AddContact';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from './context';

function App() {
  return (
    <Provider>
      <Header branding="Contact Manager" />
      <div className="container">
        <AddContact />
        <Contacts />
      </div>

    </Provider>
  );
}

export default App;
