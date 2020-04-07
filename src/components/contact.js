import React from 'react';

import {myself} from "../data/myself.js"

function constructAdressString(address) {
  return `${address.institution}<br/>
  ${address.building}, ${address.street}<br/>
  ${address.index} ${address.city}`;
}

class Publications extends React.Component {
  render() {
    return (
      <section>
        <h2>Contact</h2>

        <h3>Email</h3>
        <p><a href={"mailto:" + myself.email}>{myself.email}</a></p>

        <h3>Address</h3>
        <p dangerouslySetInnerHTML={{__html:constructAdressString(myself.workAddress)}} />
      </section>
    );
  }
}

export default Publications;
