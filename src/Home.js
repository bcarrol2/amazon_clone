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
                    title="The Martian: A Novel Andy Weir Hardcover"
                    price={23.99}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/41vw+RmEi4L._SX327_BO1,204,203,200_.jpg"
                />
            </div>
            <div className="home__row">
                <Product
                    id="12342355"
                    title="The Martian: A Novel Andy Weir Hardcover"
                    price={23.99}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/41vw+RmEi4L._SX327_BO1,204,203,200_.jpg"
                />

                <Product
                    id="12342356"
                    title="The Martian: A Novel Andy Weir Hardcover"
                    price={23.99}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/41vw+RmEi4L._SX327_BO1,204,203,200_.jpg"
                />

                <Product
                    id="12342357"
                    title="The Martian: A Novel Andy Weir Hardcover"
                    price={23.99}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/41vw+RmEi4L._SX327_BO1,204,203,200_.jpg"
                />
            </div>
            <div className="home__row">
                <Product
                    id="12342358"
                    title="The Martian: A Novel Andy Weir Hardcover"
                    price={23.99}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/41vw+RmEi4L._SX327_BO1,204,203,200_.jpg"
                />
            </div>
        </div>
    )
};

export default Home;