import styles from './Landing.scss';
import CSSModules from 'react-css-modules';

import React, { Component } from 'react';

import { Page } from '@components';

class Landing extends Component {
  state = {
  }

  componentDidMount() {
  }

  render() {
    return (
      <Page className={styles.landingPage}>
        <p>This is the Landing Page</p>
      </Page>
    );
  }
}

export default CSSModules(Landing, styles);
