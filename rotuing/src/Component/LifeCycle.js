//GET Initial State
//Set Initial State
//Before get Created
//Render
//After get Created

import React,{Component} from 'react';

class LifeCycle extends Component {
    //1 GET Initial State
    constructor(props){
        super()

    //2 Set Initial State
        this.state={
            title:'LifeCycle Method'
        }
        console.log("1,2>>>>Inside Constructor")
    }

    static getDerivedStateFromProps(props,state){
        console.log(">>>>Inside getDerivedStateFromProps>>props",props )
        console.log(">>>>Inside getDerivedStateFromProps>>state",state )
    }

    //3 Before get Created
    componentWillMount(){
        console.log("3>>>>Inside componentWillMount")
    }

    componentWillUpdate(){
        console.log(">>>>Inside componentWillUpdate")
    }

    shouldComponentUpdate(nextProps,nextState){
        console.log(">>>>Inside shouldComponentUpdate")
        if(nextState.title === this.state.title){
            return false
        }else{
            return true
        }
    }

    //4 Render
    render(){
        console.log("4>>>>Inside render")
        return(
            <div>
                <h1>{this.state.title}</h1>
                <div className="btn btn-success"
                onClick={() => {this.setState({title:'SomeThing Else'})}}>
                    Click Me
                </div>
            </div>
        )
    }

    componentDidUpdate(){
        console.log(">>>>Inside componentDidUpdate")
    }

    //5After get Created
    componentDidMount(){
        console.log("5>>>>Inside componentDidMount");
    }

    //call when we leave the component
    componentWillUnmount(){
        alert("Do you want to leave");
    }


}

export default LifeCycle;