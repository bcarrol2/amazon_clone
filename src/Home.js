import React from 'react';
import './Home.css';
import Product from './Product'

function Home() {
    return (
        <div  className="home">
            <img
            className="home__image"
            src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
            />

            <Product
                id="12342353"
                title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
                price={11}
                rating={5}
                image=""
            />
        </div>
    )
};

export default Home;
