import React,{Component} from 'react';
import Header from './Header';
import Footer from './Footer';
import JSON from '../db.json';

class Home extends Component{
    constructor(){
        super()

        this.state={
            news:JSON
        }
    }

    render(){
        console.log(this.state.news)
        return(
            <React.Fragment>
                <Header/>
                <h1>React app</h1>
                <h2>Developer Funnel</h2>
                <Footer year="2021" month="Sep"/>
            </React.Fragment>
        )
    }
}


export default Home;