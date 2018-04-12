import styles from './Page.scss';
import CSSModules from 'react-css-modules';

import React, { Component } from 'react';

import classNames from 'classnames';

class Page extends Component {
  state = {
  }

  componentDidMount() {
  }

  render() {
    const pageClassNames = classNames(
      styles.page,
      this.props.className
    );

    return (
      <div className={pageClassNames}>
        {this.props.children}
      </div>
    );
  }
}

export default CSSModules(Page, styles);
