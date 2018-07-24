// @flow
import React, {Component} from 'react';
// import {Link} from 'react-router-dom';
import styles from './Home.scss';
import icon from "../../resources/icon.svg"
import iconExternal from "../../resources/external-link.svg"
// import fetch from 'electron-fetch'

type Props = {};

export default class Home extends Component < Props > {
  // props : Props;
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
          <div key={index} className={styles.box} data-tid="box">
            <h3>{git.title}</h3>
            <a href={git.url} target="_blank">
              <img className={styles.externalLink} src={iconExternal} data-tid="externalLink" />
            </a>
            <hr />
            <ul>
              {git.command.map((command, index) => (<li key={index}>{command.command}</li>))}
            </ul>
          </div>
))
          this.setState({git})
          console.log(this.state)
      })
      .catch(err => console.error(err))
  }
  render() {
    return (
      <div>
        <div className={styles.container} data-tid="container">
          <img className={styles.logo} src={icon} data-tid="logo" />
          <h2>CheatSheet</h2>
          <div className={styles.containerBox} data-tid="containerBox">
            {this.state.git}
          </div>
        </div>
        <footer>
          <p>⚖️ MIT License</p>
        </footer>
      </div>
    );
  }
}
