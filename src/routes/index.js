import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from '../components/Home';
import About from '../components/About';
import Contact from '../components/Contact';
import Courses from '../containers/Courses';
import Evenements from '../containers/Evenements';
import GaleriePhotos from '../containers/GaleriePhotos/GaleriePhotos';
import GalerieVideos from '../containers/GalerieVideos/GalerieVideos';

export default () => (
    <div>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/qui-sommes-nous" component={About} />
            <Route exact path="/contactez-nous" component={Contact} />
            <Route exact path="/galerie-photos" component={GaleriePhotos} />
            <Route exact path="/galerie-videos" component={GalerieVideos} />
            <Route path="/nos-cours" component={Courses} />
            <Route path="/nos-evenements" component={Evenements} />
        </Switch>
    </div>
);