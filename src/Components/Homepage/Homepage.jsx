import React from 'react';
import Banner from './Banner/Banner';
import Component from './Component/Component';
import Footer from '../Footer/Footer';
import About from '../About/About';

export default function Homepage() {
    return (
        <div>
            <Banner />
            <About />
            <Component />
            <Footer />
            
        </div>
    )
}
