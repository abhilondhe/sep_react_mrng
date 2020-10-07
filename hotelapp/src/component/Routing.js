import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Home from './Home/Main';
import Footer from './Footer';
import Header from './Header';
import ListingApi from './Listing/ListingApi';


const Routing = () => {
    return(
        <BrowserRouter>
            <div>
                <Header/>
                <Route exact path="/" component={Home}/>
                <Route path="/list/:id" component={ListingApi}/>
                <Footer/>
            </div>
        </BrowserRouter>
    )
}

export default Routing;