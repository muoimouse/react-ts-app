import * as React from 'react';
import { Link } from 'react-router-dom';
import { Nav, Button } from 'react-bootstrap';

class Header extends React.Component {
    render() {
        return (
            <Nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
                <div className="container">
                    <p className="navbar-brand"><Link className="navbar-brand" to="#">Mouse blog</Link></p>
                    <Button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"/>
                    </Button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item active" key="1">
                                <p className="nav-link"><Link to="/">Home</Link>
                                    <span className="sr-only">(current)</span>
                                </p>
                            </li>
                            <li className="nav-item" key="2">
                                <p className="nav-link"><Link to="about">About</Link></p>
                            </li>
                            <li className="nav-item" key="3">
                                <p className="nav-link"><Link to="services">Services</Link></p>
                            </li>
                            <li className="nav-item" key="4">
                                <p className="nav-link"><Link to="contact">Contact</Link></p>
                            </li>
                        </ul>
                    </div>
                </div>
            </Nav>
        );
    }
}

export default Header;
