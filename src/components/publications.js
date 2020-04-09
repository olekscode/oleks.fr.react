import React from 'react';

import { publications } from "../data/publications.js"

function publicationView(publication) {
  return <div>{publication.title}</div>
}

class Publication extends React.Component {
  constructor(props) {
    super(props);
    this.authors = props.value.authors;
    this.title = props.value.title;
    this.date = new Date(props.value.date);
    this.publisher = props.value.publisher;
    this.city = props.value.city;
    this.country = props.value.country;
    this.links = props.value.links;
  }

  mergeAuthors(authors) {
    return authors.join(', ');
  }

  showLinks(links) {
    return (
      <div>
        {links.map(link =>
          <div><a href={link.url}>{link.type}</a></div>)}
      </div>
    );
  }

  render() {
    return (
      <div>
        <div>
          {this.mergeAuthors(this.authors)}.
          {this.title}.
          {this.publisher}.
          {this.city},
          {this.country}.
          {this.date.getFullYear()}
        </div>
        {this.showLinks(this.links)}
      </div>
    );
  }
}

class PublicationsGroup extends React.Component {
  render() {
    const group = this.props.value;
    const publications = group.publications.map(publication =>
      <Publication key={publication.title} value={publication} />
    );

    return (
      <div>
        <h3>{group.category}</h3>
        {publications}
      </div>
    );
  }
}

class Publications extends React.Component {
  render() {
    const publicationsPage = publications
      .filter(group => group.publications.length)
      .map(group =>
        <PublicationsGroup key={group.category} value={group} />
      );

    return (
      <section>
        <h2>Publications</h2>
        {publicationsPage}
      </section>
    );
  }
}

export default Publications;
