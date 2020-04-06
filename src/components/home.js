import React from 'react';

import Header from './header';
import Publications from './publications';

class Home extends React.Component {
  render() {
    return (
      <div>
      <Header />
      <Publications />
      </div>
    );
  }
}

export default Home;
