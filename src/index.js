import React from 'react';
import ReactDOM from 'react-dom';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

import $ from 'jquery';

// import SideMenu from './components/side-menu';
import Home from './components/home';
import CurriculumVitae from './components/curriculum-vitae';
import Contact from './components/contact';

import './index.css';
import profilePicture from './img/profile.jpg';

class PageLink extends React.Component {

}

class App extends React.Component {

  componentDidMount() {

  }

  render() {
    return (
      <div>
      <Router>
        <div>
          <aside id="sidebar">
            <nav>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/cv">Curriculum Vitae</Link>
                </li>
                <li>
                  <a href="https://blog.oleks.fr">Blog</a>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </nav>
          </aside>

          <article>
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/cv">
                <CurriculumVitae />
              </Route>
              <Route path="/contact">
                <Contact />
              </Route>
            </Switch>
          </article>
        </div>
      </Router>
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
