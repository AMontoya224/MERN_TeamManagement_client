import React from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import New from './views/New/New';
import Status from './views/Status/Status';
import Home from './views/Home/Home';


function App() {
  return (
    <div className="App">
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons+Outlined" rel="stylesheet"></link>
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons+Round" rel="stylesheet"></link>
      <BrowserRouter>
        <Switch>
          <Route path="/players/addplayer" render={ routeProps => <New {...routeProps} />} />
          <Route path="/status/game/:idx" render={ routeProps => <Status {...routeProps} />} />
          <Route path="/players/list" render={ routeProps => <Home {...routeProps} />}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;