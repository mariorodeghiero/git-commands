// @flow
import React, {Component} from 'react';
// import {Link} from 'react-router-dom';
import styles from './Home.scss';
import icon from "../../resources/icon.svg"
import iconExternal from "../../resources/external-link.svg"

type Props = {};

export default class Home extends Component < Props > {
  // props : Props;
  render() {
    return (
      <div>
        <div className={styles.container} data-tid="container">
          <img className={styles.logo} src={icon} data-tid="logo" />
          <h2>CheatSheet</h2>
          <div className={styles.containerBox} data-tid="containerBox">
            <div className={styles.box} data-tid="box">
              <h3>Configurations</h3>
              <a href="https://git-scm.com/book/en/v2/Getting-Started-First-Time-Git-Setup" target="_blank">
                <img className={styles.externalLink} src={iconExternal} data-tid="externalLink" />
              </a>
              <hr />
              <ul>
                <li title="teste teste teste teste teste" > git config --global user.name "your name"</li>
                <li > git config --global user.email "your@email.com"</li>
                <li > git config --global color.ui true </li>
                <li > git config --list</li>
                <li > git help config</li>
                <li > git help</li>
              </ul>
            </div>
            <div className={styles.box} data-tid="box">
              <h3>Starting a repository</h3>
              <a href="https://git-scm.com/book/en/v2/Getting-Started-First-Time-Git-Setup" target="_blank">
                <img className={styles.externalLink} src={iconExternal} data-tid="externalLink" />
              </a>
              <hr />
              <ul>
                <li>git init</li>
                <li>git status</li>
              </ul>
            </div>
            <div className={styles.box} data-tid="box">
              <h3>Starting files</h3>
              <a href="https://git-scm.com/book/en/v2/Getting-Started-First-Time-Git-Setup" target="_blank">
                <img className={styles.externalLink} src={iconExternal} data-tid="externalLink" />
              </a>
              <hr />
              <ul>
                <li>git add my_new_file.txt</li>
                <li>git add my-file.ts another-file.js</li>
                <li>git add .</li>
                <li>git add --all</li>
                <li> git rm --cached file-name.txt</li>
                <li> git reset file-name.txt</li>
              </ul>
            </div>
            <div className={styles.box} data-tid="box">
              <h3>Commiting</h3>
              <a href="https://git-scm.com/book/en/v2/Getting-Started-First-Time-Git-Setup" target="_blank">
                <img className={styles.externalLink} src={iconExternal} data-tid="externalLink" />
              </a>
              <hr />
              <ul>
                <li>git commit -m "Add three files"</li>
                <li>git commit -a -m "Do something once more"</li>
                <li>git reset --soft HEAD^</li>
                <li>git commit --amend -m "enter your message"</li>
              </ul>
            </div>
            <div className={styles.box} data-tid="box">
              <h3>Pulling and pushing</h3>
              <a href="https://git-scm.com/book/en/v2/Getting-Started-First-Time-Git-Setup" target="_blank">
                <img className={styles.externalLink} src={iconExternal} data-tid="externalLink" />
              </a>
              <hr />
              <ul>
                <li>git remote add origin https://yourRepository.git
                </li>
                <li>git push -u origin master</li>
                <li>git remote -v</li>
                <li > git clone https://yourRepository.git</li>
                <li>git pull</li>
              </ul>
            </div>
            <div className={styles.box} data-tid="box">
              <h3>Branching</h3>
              <a href="https://git-scm.com/book/en/v2/Getting-Started-First-Time-Git-Setup" target="_blank">
                <img className={styles.externalLink} src={iconExternal} data-tid="externalLink" />
              </a>
              <hr />
              <ul>
                <li>git branch</li>
                <li>git branch branch-name</li>
                <li>git checkout branch-name</li>
                <li>git merge branch-name</li>
                <li>git checkout -b branch-name</li>
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
