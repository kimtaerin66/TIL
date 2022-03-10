import React,{ useState, useEffect } from 'react';
import Home from '../routes/Home';
import Detail from '../routes/Detail';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
//npm i react-router-dom@5.3.0

function App() {
 
return (
  <Router>
    <Switch>
    <Route path ='/movie/:id'>
       <Detail />
      </Route>
      <Route path ='/'>
       <Home />
      </Route>
    </Switch>
  </Router>
);
   
}

export default App;
