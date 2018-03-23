import React from 'react';
import Routes from '../routes';
import './App.css';
import Header from './Header/Header';
import Footer from './Footer/Footer';


const App = () => {
    return (
        <div>
            <Header />
            <main className="container">
                <Routes />
            </main>
            <Footer />
        </div>
    );
};

export default App;