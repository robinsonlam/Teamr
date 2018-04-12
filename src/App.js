import React, { Component } from 'react';
import logo from './logo.svg';
import styles from './App.scss';

class App extends Component {
  render() {
    return (
      <div id="app">
        {/* Header/Navigation */}
        <div className={styles.appBody}>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default App;
