import React from 'react';
import ReactDOM from 'react-dom';

import SideMenu from './components/side-menu';
import Header from './components/header';

import './index.css';

class App extends React.Component {
  render() {
    return (
      <div>
        <SideMenu />
        <article>
          <Header />
        </article>
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
