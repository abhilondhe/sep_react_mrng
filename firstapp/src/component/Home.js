import React,{Component} from 'react';
import Header from './Header';
import Footer from './Footer';
import JSON from '../db.json';
import NewsList from './NewsList';

class Home extends Component{
    constructor(){
        super()

        this.state={
            news:JSON,
            filtered:JSON
        }
    }

    filterNews(userinput){
        const output =this.state.news.filter((data) =>{
            return data.title.toLowerCase().indexOf(userinput.toLowerCase())>-1
        })

        this.setState({filtered:output})
    }


    render(){
        return(
            <React.Fragment>
                <Header userText={(data) => {this.filterNews(data)}}/>
                <NewsList newsdata={this.state.filtered}/>
                <Footer year="2021" month="Sep"/>
            </React.Fragment>
        )
    }
}


export default Home;