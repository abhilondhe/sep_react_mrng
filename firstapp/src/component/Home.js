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

    /*var a = [56,45,32,23,43,78,68]
a.filter((data) => { return data>45})*/

    filterNews(keyword){
        const output =this.state.news.filter((data) =>{
            return data.title.indexOf(keyword)>-1
        })

        this.setState({filtered:output})
    }


    render(){
        //console.log(this.state.news)
        return(
            <React.Fragment>
                <Header/>
                <NewsList newsdata={this.state.filtered}/>
                <Footer year="2021" month="Sep"/>
            </React.Fragment>
        )
    }
}


export default Home;