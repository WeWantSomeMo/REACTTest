import './App.css';
//import React, {Component} from 'react';
//import ApolloClient from 'apolloboost';
//import {ApolloProvider} from 'react-apollo';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import NavbarSetup from './components/NavbarSetup';
import LoginPage from './components/LoginPage';
import DashboardAGPage from './components/DashboardAllGoalsPage'
import Signup from './components/Signup'
import NewGoals from './components/NewGoals';

function App() {
  return (
      <div className="App">
        <NavbarSetup  />
        <BrowserRouter>
        <Routes>
          <Route path="/" element= {<LoginPage/>} />
          <Route path="/allgoals" element= {<DashboardAGPage/>} />
<<<<<<< Updated upstream
          <Route path="/register" element ={<Signup/>} />
          <Route path="/newgoals" elenent= {<NewGoals/>} />
=======
          <Route path="/Signup" element ={<Signup/>} />
          <Route path="/NewGoals" element= {<NewGoals/>} />
>>>>>>> Stashed changes
        </Routes>
        </BrowserRouter>
      </div>
  );
}

export default App;