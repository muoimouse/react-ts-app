import * as React from 'react';
import { Link } from 'react-router-dom';
/// <reference path="./interfaces.d.ts" />

class NavItem extends React.Component<HeaderLink, HeaderLink> {
  constructor(props: HeaderLink) {
    super(props);
  }

  render() {
    return (
        <Link className={`${this.props.className}`} to={`${this.props.href}`}>{this.props.value}</Link>
    );
  }
}

class Header extends React.Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
          <div className="container">
            <NavItem className="navbar-brand" href="/" value="Mouse Blog" />
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item active" key="1">
                  <NavItem className="nav-link" href="/" value="Home" />
                </li>
                <li className="nav-item" key="2">
                  <NavItem className="nav-link" href="/about" value="About" />
                </li>
                <li className="nav-item" key="3">
                  <NavItem className="nav-link" href="/services" value="Services" />
                </li>
                <li className="nav-item" key="4">
                  <NavItem className="nav-link" href="contact" value="Contact" />
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Header;
