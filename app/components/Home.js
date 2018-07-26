// @flow
import React, {Component} from 'react';
// import {Link} from 'react-router-dom';
import styles from './Home.scss';
import iconExternal from "../../resources/external-link.svg"
import Header from './Header/Header';

type Props = {};

export default class Home extends Component < Props > {
  constructor(props) {
    super(props);
    this.state = {
      git: []
    };
  }
  componentDidMount(){
    const url = "https://raw.githubusercontent.com/mariorodeghiero/git-cheatsheet/master/app/db.json"
    fetch(url)
      .then(res => res.json())
      .then(data => {
        const git = data.git.map((git, index) => (
          <section key={index} className={styles.box} data-tid="box">
            <h3>{git.title}</h3>
            <a href={git.url} target="_blank">
              <img className={styles.externalLink} src={iconExternal} data-tid="externalLink" alt="Git icon" />
            </a>
            <hr />
            <nav>
              <ul>
                {git.command.map((command, index) => (<li key={index} title={command.note}>{command.command}</li>))}
              </ul>
            </nav>
          </section>
))
         return this.setState({git})
      })
      .catch(err => console.error(err))
  }
  render() {
    return (
      <div>
        <div className={styles.container} data-tid="container">
          <Header />
          <article className={styles.containerBox} data-tid="containerBox">
            {this.state.git}
          </article>
        </div>
      </div>
    );
  }
}
