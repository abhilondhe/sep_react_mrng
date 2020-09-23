import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import Footer from './Footer';

const Home = () => {
    return(
        <React.Fragment>
            <Header/>
            <h1>React app</h1>
            <h2>Developer Funnel</h2>
            <Footer year="2021" month="Sep"/>
        </React.Fragment>

    )
}

export default Home;