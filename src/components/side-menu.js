import React from 'react';
import { pages } from '../data/pages.js';

class SideMenu extends React.Component {
  render() {
    const pageLinks = pages.map(page =>
      <li key={page.id}>
        <a href={page.href}>{page.title}</a>
      </li>);

    return (
      <aside id="sidebar">
        <nav>
          <ul>
            {pageLinks}
          </ul>
        </nav>
      </aside>
    );
  }
}

export default SideMenu;
