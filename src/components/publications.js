import React from 'react';

import { publications } from "../data/publications.js"

import pdfPicture from '../img/pdf.png';
import halPicture from '../img/hal.png';
import acmPicture from '../img/acm.png';
import githubPicture from '../img/github.png';

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

    this.linkPictures = {
      'PDF': pdfPicture,
      'HAL': halPicture,
      'ACM': acmPicture,
      'GitHub': githubPicture
    };
  }

  asString() {
    return `
      ${this.authors.join(', ')}.
      ${this.title}.
      ${this.publisher}.
      ${this.city},
      ${this.country}.
      ${this.date.getFullYear()}`;
  }

  render() {
    const linksHtml = this.links.map(link =>
      <a href={link.url}><img src={this.linkPictures[link.type]} /></a>);

    return (
      <div class="publication">
        <div class="publication-string">
          {this.asString()}
        </div>
        <div class="publication-links">
          {linksHtml}
        </div>
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
