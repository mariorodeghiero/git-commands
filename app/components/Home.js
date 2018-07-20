// @flow
import React, {Component} from 'react';
// import {Link} from 'react-router-dom';
import styles from './Home.scss';

type Props = {};

export default class Home extends Component < Props > {
  // props : Props;

  render() {
    return (
      <div>
        <div className={styles.container} data-tid="container">
          <p>v1.0.0</p>
          <h2>Git Shortcut</h2>
          <div className={styles.containerBox} data-tid="containerBox">
            <div className={styles.box} data-tid="box">
              <h3>Local repository</h3>
              <hr />
              <ul>
                <li title="teste teste teste teste teste">git commit -am</li>
                <li>git commit -am</li>
                <li>git commit -am</li>
                <li>git commit -am</li>
                <li>git commit -am</li>
              </ul>
            </div>
            <div className={styles.box} data-tid="box">
              <h3>Remote Repository</h3>
              <hr />
              <ul>
                <li>git commit -am</li>
                <li>git commit -am</li>
                <li>git commit -am</li>
                <li>git commit -am</li>
                <li>git commit -am</li>
              </ul>
            </div>
            <div className={styles.box} data-tid="box">
              <h3>GitHub Repository</h3>
              <hr />
              <ul>
                <li>git commit -am</li>
                <li>git commit -am</li>
                <li>git commit -am</li>
                <li>git commit -am</li>
                <li>git commit -am</li>
              </ul>
            </div>
            <div className={styles.box} data-tid="box">
              <h3>Branches</h3>
              <hr />
              <ul>
                <li>git commit -am</li>
                <li>git commit -am</li>
                <li>git commit -am</li>
                <li>git commit -am</li>
                <li>git commit -am</li>
              </ul>
            </div>
            <div className={styles.box} data-tid="box">
              <h3>Remote Branches</h3>
              <hr />
              <ul>
                <li>git commit -am</li>
                <li>git commit -am</li>
                <li>git commit -am</li>
                <li>git commit -am</li>
                <li>git commit -am</li>
              </ul>
            </div>
            <div className={styles.box} data-tid="box">
              <h3>Conflicts</h3>
              <hr />
              <ul>
                <li>git commit -am</li>
                <li>git commit -am</li>
                <li>git commit -am</li>
                <li>git commit -am</li>
                <li>git commit -am</li>
              </ul>
            </div>
          </div>
        </div>
        <footer>
          <p>⚖️ MIT License</p>
        </footer>
      </div>
    );
  }
}
