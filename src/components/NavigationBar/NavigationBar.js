import styles from './NavigationBar.scss';
import CSSModules from 'react-css-modules';

import React, { Component } from 'react';

import { NavLink } from 'react-router-dom';

class NavigationBar extends Component {
  state = {
  }

  componentDidMount() {
  }

  render() {
    return (
      <header className={styles.navigationBar}>
        <div className={styles.logo}>
          <NavLink to="/">
            <img src={require('@assets/teamr-icon.svg')} alt="teamr-icon" />
          </NavLink>
        </div>

        <nav className={styles.navigationItems}>
          {/* Logged In */}
          <NavLink className={styles.navigationLink} activeClassName={`${styles.active}`} to="/login">My Teams</NavLink>

          {/* Not Logged In */}
          <NavLink className={styles.navigationLink} activeClassName={`${styles.active}`} to="/login">Log In</NavLink>
        </nav>
      </header>
    );
  }
}

export default CSSModules(NavigationBar, styles);
