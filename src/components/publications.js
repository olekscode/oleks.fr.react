import React from 'react';

import { publications } from "../data/publications.js"

class Publications extends React.Component {
  render() {
    console.log(publications);

    return (
      <section>
        <h2>Publications</h2>

        <h3>Workshops</h3>

        <table class="publications">
          <tr>
            <td>&mdash;</td>
            <td>Julien Delplanque, Stéphane Ducasse, <b>Oleksandr Zaitsev</b>. Magic Literals in Pharo. IWST19 - International Workshop on Smalltalk Technologies Cologne, Aug 2019, Köln, Germany. ⟨hal-02266137⟩</td>
            <td><a href="">pdf</a></td>
          </tr>
          <tr>
            <td>&mdash;</td>
            <td><b>Oleksandr Zaytsev</b>, Nick Papoulias, and Serge Stinckwich. 2017. Towards Exploratory Data Analysis for Pharo. In Proceedings of the 12th edition of the International Workshop on Smalltalk Technologies (IWST ’17). Association for Computing Machinery, New York, NY, USA, Article 12, 1–6. DOI:https://doi.org/10.1145/3139903.3139918</td>
            <td><a href="">pdf</a></td>
          </tr>
        </table>

        <h3>Tech Reports</h3>

        <table class="publications">
          <tr>
            <td>&mdash;</td>
            <td><b>Oleksandr Zaitsev</b>, Stéphane Ducasse, Nicolas Anquetil. Characterizing Pharo Code: A Technical Report. [Technical Report] Inria Lille Nord Europe - Laboratoire CRIStAL - Université de Lille; Arolla. 2020. <a href="">⟨hal-02440055⟩</a></td>
            <td><a href="">pdf</a></td>
          </tr>
        </table>

        <h3>Booklets & Chapters</h3>

        <table class="publications">
          <tr>
            <td>&mdash;</td>
            <td><b>Oleksandr Zaitsev</b>, Stéphane Ducasse. AI Book. Chapter 3. A-Priori Algorithm for Mining Frequent Itemsets. Square Brackets Associates 2020.</td>
            <td><a href="">pdf</a></td>
          </tr>
          <tr>
            <td>&mdash;</td>
            <td><b>Oleksandr Zaitsev</b>. Data Analysis Made Simple with Pharo DataFrame. Square Brackets Associates. 2019.</td>
            <td><a href="">pdf</a></td>
          </tr>
        </table>
      </section>
    );
  }
}

export default Publications;
