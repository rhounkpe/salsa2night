import React from 'react';

import { NavLink } from 'react-router-dom';

const NavLinks = () => {
    return (
        <div>
            <li><NavLink to="/">Accueil</NavLink></li>
            <li><NavLink to="/qui-sommes-nous">A propos</NavLink></li>
            <li><NavLink to="/nos-cours">Cours</NavLink></li>
            <li><NavLink to="/nos-evenements">Evénements</NavLink></li>
            <li><NavLink to="/contactez-nous">Contacts</NavLink></li>
        </div>
    );
};

export default NavLinks;