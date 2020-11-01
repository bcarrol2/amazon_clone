import React from 'react';
import './Home.css';
import Product from './Product'

function Home() {
    return (
        <div className="home">
            <img
            className="home__image"
            src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
            />
            <div className="home__row">
                <Product
                    id="12342353"
                    title="The Martian: A Novel Andy Weir Hardcover"
                    price={23.99}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/41vw+RmEi4L._SX327_BO1,204,203,200_.jpg"
                />

                <Product
                    id="12342354"
                    title="2020 Playstation 4 PS4 1TB Slim Gaming Console w/Ghost Manta Fast Charging Station Dock"
                    price={479.00}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/41HVaUKLTkL._AC_.jpg"
                />
            </div>
            <div className="home__row">
                <Product
                    id="12342355"
                    title="Fender Player Stratocaster Electric Guitar - Maple Fingerboard - Buttercream"
                    price={699.00}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/610mei3tGrL._AC_SX679_.jpg"
                />

                <Product
                    id="12342356"
                    title="Donner DDP-100 88-Key Weighted Action Digital Piano, Beginner Bundle with Furniture Stand, Power Adapter, Triple Pedals, MP3 Function, Black"
                    price={549.99}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/61vaf3CgRhL._AC_SX679_.jpg"
                />

                <Product
                    id="12342357"
                    title="It: A Novel Stephen King Hardcover"
                    price={19.59}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/51tUePGFFlL._SX334_BO1,204,203,200_.jpg"
                />
            </div>
            <div className="home__row">
                <Product
                    id="12342358"
                    title="LG 34WN80C-B 34 inch 21:9 Curved UltraWide WQHD IPS Monitor with USB Type-C Connectivity sRGB 99% Color Gamut and HDR10 Compatibility, Black (2019)"
                    price={549.99}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/81WBbFOEHwL._AC_SL1500_.jpg"
                />
            </div>
        </div>
    )
};

export default Home;