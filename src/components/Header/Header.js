import React from 'react';
import NavLinks from './NavLinks';
import { NavLink, Link } from 'react-router-dom';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Container
} from 'reactstrap';


class Header extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }


    render() {
        const navBarStyle = {
            backgroundColor: '#3d5c5c'
        };

        return (
            <div>
                <Navbar color="navbar navbar-light" style={navBarStyle}>
                    <Container>
                        <Nav>
                            <NavItem>
                                <NavLink to="/">Salsa 2 Night</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink to="qui-sommes-nous">A propos</NavLink>
                            </NavItem>
                            <NavItem>
                            <NavLink to="/contactez-nous">Contacts</NavLink>
                            </NavItem>
                        </Nav>
                    </Container>
                </Navbar>
            </div>
        );
    }
}

export default Header;