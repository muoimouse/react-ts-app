import * as React from 'react';
import { Link } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../store';
/// <reference path="./interfaces.d.ts" />

// class NavItem extends React.Component<HeaderLink, HeaderLink> {
//   constructor(props: HeaderLink) {
//     super(props);
//   }
//
//   render() {
//     return (
//         <Link className={`${this.props.className}`} to={`${this.props.href}`}>{this.props.value}</Link>
//     );
//   }
// }

class Header extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <div className="header-text">
          <div className="col-lg-4 offset-lg-4">
            <img className="header-img" src="./mouse.jpg" alt=""/>
            <h1>Mouse</h1>
            <hr/>
            <p>Software engineer, blogger at @Mouse</p>
          </div>
          {/*menu socials*/}
          <div className="menu-socials">
            <ul className="nav">
              <li className="presentation"><Link to="/"><i className="fab fa-facebook"/></Link></li>
              <li className="presentation"><Link to="/"><i className="fab fa-twitter"/></Link></li>
              <li className="presentation"><Link to="/"><i className="fab fa-github-square"/></Link></li>
              <li className="presentation"><Link to="/"><i className="fab fa-linkedin"/></Link></li>
            </ul>
          </div>
        </div>
      </Provider>
    );
  }
}

export default Header;
