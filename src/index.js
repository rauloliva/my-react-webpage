import React from 'react';
import ReactDOM from 'react-dom';
import LandingPage from './components/LandingPage'
import Header from './components/Header'
import Footer from './components/Footer'
import ContactMe from './components/ContactMe'
import MyProjects from './components/MyProjects'
import * as serviceWorker from './serviceWorker';
import './index.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
const root = "/MyReactWebPage"

ReactDOM.render(
  <Router>
    <Header />
    <Switch>
      <Route exact path={ root + '/' } >
        <LandingPage />
      </Route>

      <Route path={ root + '/projects' } >
        <MyProjects />
      </Route>

      <Route path={ root + '/contact' }>
        <ContactMe />
      </Route>
    </Switch>
    <Footer />
  </Router>,
  document.getElementById('root')
);

serviceWorker.register();
