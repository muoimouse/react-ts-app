import * as React from 'react';
import * as PropTypes from 'prop-types';
import Header from './Header';
import Footer from './Footer';
/// <reference path="./interfaces.d.ts" />

class Layout extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  };

  render() {
    return (
      <div>
        <Header />
        {this.props.children}
        <Footer />
      </div>
    );
  }
}

export default Layout;
