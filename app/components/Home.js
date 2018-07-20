// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.scss';

type Props = {};

export default class Home extends Component<Props> {
  props: Props;

  render() {
    return (
      <div>
        <div className={styles.container} data-tid="container">
          <h2>Shortcut</h2>
          <Link className="link-menu" to="/counter">Git</Link>
        </div>
      </div>
    );
  }
}
