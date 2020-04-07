import React from 'react';
import { myself } from '../data/myself.js';

import profilePicture from '../img/profile.jpg';

function startEachSentenceFromNewLine(text) {
  return text.split('.').join('.<br/>');
}

class Header extends React.Component {
  render() {
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
              <div className='subtitle' dangerouslySetInnerHTML={
                {__html: startEachSentenceFromNewLine(myself.description)}
              }></div>
            </td>
          </tr>
        </tbody>
        </table>
      </header>
    );
  }
}

export default Header;
