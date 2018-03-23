import React from 'react';
import NavLinks  from './NavLinks';

const Header = () => {
    return (
        <header>
            <nav>
                <div className="container nav-wrapper">
                    <a href="#!" class="brand-logo">Logo</a>
                    <a href="#" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons">menu</i></a>
                    <ul className="right hide-on-med-and-down">
                        <NavLinks />
                    </ul>
                </div>
            </nav>

            <ul className="sidenav" id="mobile-demo">
                <NavLinks />
            </ul>
        </header>
    );
};

export default Header;