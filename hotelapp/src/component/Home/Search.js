import React,{Component} from 'react';
import './Search.css';

const lurl = " https://developerfunnel.herokuapp.com/location"

class Search extends Component{

    constructor(){
        super()

        this.state={
            location:''
        }
    }

    render(){
        return(
           <div className="imageContainer">
               <div id="logo">
                   <b>D!</b>
               </div>
                <div className="heading">
                    Plan Trip With Us
                </div>
                <div className="locationSelector">
                    <select>
                        <option>----SELECT CITY---</option>
                    </select>
                    <select>
                        <option>----SELECT Hotel---</option>
                    </select>
                </div>


           </div>
        )
    }

    componentDidMount(){
        fetch(lurl,{Method:'GET'})
        .then((res) => res.json())
        .then((data) => { this.setState({location:data})})
        .catch((err)=> {})
    }
}

export default Search