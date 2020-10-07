import React,{Component} from 'react';
import axios from 'axios';
import ListingDisplay from './ListingDisplay';

const url = "https://developerfunnel.herokuapp.com/hotellist"

class Listing extends Component{
    constructor(){
        super()

        this.state={
            hotellist:''
        }
    }

    render(){
        console.log(this.state.hotellist)
        return(
            <div>
            <div className="row">
                <div className="col-md-2">
                   Filter Here
                </div>
                <div className="col-md-10">
                    <ListingDisplay listdata={this.state.hotellist}/>
                </div>
            </div>
        </div>
        )
    }

    componentDidMount(){
        var tripid = this.props.match.params.id;
        sessionStorage.setItem('tripid', tripid)
        axios.get(`${url}/${tripid}`)
        .then((response) => {this.setState({hotellist:response.data})})
    }
}

export default Listing;