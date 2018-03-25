import React from 'react';

import IMG3 from '../../images/party3.jpg';

const Parallax = () => {


    return (
        <section>

            <div className="parallax-container">
                <div className="parallax"><img src={IMG3} /></div>
            </div>
            <div className="section white">
                <div className="row container">
                    <h2 className="header">Parallax</h2>
                    <p className="grey-text text-darken-3 lighten-3">Parallax is an effect where the background content or image in this case, is moved at a different speed than the foreground content while scrolling.</p>
                </div>
            </div>
            <div className="parallax-container">
                <div className="parallax"><img src="http://lorempixel.com/1200/750/" /></div>
            </div>

        </section>
    );
};

export default Parallax;