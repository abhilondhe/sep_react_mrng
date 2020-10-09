import React,{Component} from 'react';
import BookingDisplay from './BookingDisplay';
import axios from 'axios';

const burl = "https://developerfunnel.herokuapp.com/allBooking"

class Booking extends Component{
    constructor(){
        super()

        this.state={
            booking:''
        }
    }

    render(){
        return(
            <div className='contianer'>
                <BookingDisplay bookdata={this.state.booking}/>
            </div>
        )
    }

    async componentDidMount(){
        const response = await axios.get(burl);
        this.setState({booking:response.data})
    }
}

export default Booking;