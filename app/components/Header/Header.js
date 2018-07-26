import React, { Component } from 'react';
import icon from "../../../resources/icon.svg"
import styles from'./Header.scss'

class Header extends Component {
  state = {  }
  render() {
    return (
      <div className={styles.headerContainer} src={icon} data-tid="headerContainer" >
        <header >
          <p>⚖️ MIT License</p>
          <img className={styles.logo} src={icon} data-tid="logo" />
          <h2>CheatSheet</h2>
        </header>
      </div>
    );
  }
}

export default Header;
