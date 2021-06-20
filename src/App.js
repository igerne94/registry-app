import React from 'react';
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Home from "./routes/Home";
import Registry from "./routes/Registry";
import Weather from "./routes/Weather";

import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>

          <Route path="/" exact>
            <Home/>
          </Route>

          <Route path="/registry">
            <Registry/>
          </Route>

          <Route path="/weather">
            <Weather/>
          </Route>
          
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
