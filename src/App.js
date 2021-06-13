import './App.css';
import Login from './Pages/Login';
import Require_pass from './Pages/Require_pass';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom'
import PrivateRoute from './HOC/PrivateRoute';
import { useEffect } from 'react';
import Homepage from './Pages/Homepage';

function App() {




  return (
    <div className="App">


      <Switch>


        <Route path="/email" component={Login} />
        <Route path="/" exact component={Homepage} />
        <PrivateRoute path="/pass" component={Require_pass} />

      </Switch>



    </div>
  );
}

export default App;
