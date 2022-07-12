import React from 'react'
import Product from '../src/Product';
import Book from '../src/images/Book.png'
import './Home.css'
function Home() {
    return (
        <div className="home">
            <div className="home_container">
                <img src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" 
                className="banner"/>
            <div className="home_row">
                <Product title="The lean startup" id="233"
                price={29.99} 
                rating={5}
                image={Book}/>
                <Product title="The lean startup" id="344"
                price={29.99} 
                rating={5}
                image={Book}/>
            </div>
            <div className="home_row">
            <Product title="The lean startup" id="455"
                price={29.99} 
                rating={5}
                image={Book}/>
            <Product title="The lean startup" id="566"
                price={29.99} 
                rating={5}
                image={Book}/>
            <Product title="The lean startup" id="267"
                price={29.99} 
                rating={5}
                image={Book}/>
            </div>
            <div className="home_row">
            <Product title="The lean startup" id="109"
                price={29.99} 
                rating={5}
                image={Book}/>
            <Product title="The lean startup" id="800"
                price={29.99} 
                rating={5}
                image={Book}/>
                
            </div>
            </div>
        </div>
    )
}

export default Home
