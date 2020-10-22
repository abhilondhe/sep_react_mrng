import React,{Component} from 'react';
import {connect} from 'react-redux';
import PropTypes, { func } from 'prop-types';
import { render } from 'react-dom';
import {latestNews,articleNews,galleryNews} from '../actions'

class Home extends Component{
    componentDidMount(){
        this.props.dispatch(latestNews())
        this.props.dispatch(articleNews())
        this.props.dispatch(galleryNews())
    }

    render(){
        return(
            <h1>Home</h1>
        )
    }
}

function mapStateToProps(state){
    console.log(state)
}

Home.protoTypes = {
    dispatch:PropTypes.func
}

export default connect(mapStateToProps)(Home)