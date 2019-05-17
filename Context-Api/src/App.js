import React from 'react';
import './App.css';
import Header from './components/layout/Header';
import Contacts from './components/contact/Contacts';
import AddContact from './components/contact/AddContact';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from './context';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NotFound from './components/pages/NotFound';

function App() {
  return (
    <Provider>
      <Router>
        <Header branding="Contact Manager" />
        <div className="container">
          <Switch>
            <Route exact path="/" component={Contacts} />
            <Route exact path="/contact/add" component={AddContact} />
            <Route component={NotFound} />
          </Switch>
        </div>

      </Router>
    </Provider>
  );
}

export default App;
