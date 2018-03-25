import React from 'react';
import IMG1 from '../images/party1.jpg';
import IMG2 from '../images/party2.jpg';
import IMG3 from '../images/party3.jpg';

import MyCarousel from './Header/MyCarousel';

class Home extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div>
                <MyCarousel />
            </div>
        );
    }

}

export default Home;