import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
// import logo from './logo.svg';
import './App.css';
import Home from './modules/Home'
import NewForm from './modules/NewForm'
import ClassForm from './modules/ClassForm'
import HookForm from './modules/HookForm'


function App() {
 
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/newForm" component={NewForm}></Route>
          <Route exact path="/classForm" component={ClassForm}></Route>
          <Route exact path="/hookForm" component={HookForm}></Route>
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
