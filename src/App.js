import logo from './logo.svg';
import './App.css';
import React, {useContect} from "react";
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
  Link
} from "react-router-dom";
import Home from "./pages/Home"
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route
          element={<Home/>}
          path='/'
          >
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
