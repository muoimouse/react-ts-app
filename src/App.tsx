import * as React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './common/home';
import About from './common/about';
import Post from './common/post';

class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact={true} path="/" component={Home}/>
          <Route path="/about" component={About}/>
          <Route path="/post" component={Post}/>
        </Switch>
      </Router>
    );
  }
}

export default App;
