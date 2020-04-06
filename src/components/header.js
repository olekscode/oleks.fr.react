import React from 'react';
import { myself } from '../data/myself.js';

import profilePicture from '../img/profile.JPG';

class Header extends React.Component {
  render() {
    const description = myself.description.split('\n').map(line =>
      <div className='subtitle'>
        {line}<br/>
      </div>
    );

    return (
      <header>
        <table className='header'>
        <tbody>
          <tr>
            <td>
            <img id='profile-picture' alt='' src={profilePicture} />
            </td>
            <td>
              <div className='title'>{myself.name}</div>
              {description}
            </td>
          </tr>
        </tbody>
        </table>
      </header>
    );
  }
}

export default Header;
