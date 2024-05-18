import React, {Component} from "react";
import UserSignIn from "./UserSignIn";
import SuccessChild from "./SuccessChild";
import SuccessStory from "./SuccessStory";



export default class Success extends Component {
    constructor(props) {
        super(props)

        this.state = {
            Name : "Jonkler",
            quoteColor: "violet"
        }
    }
    
    updateQuoteColor = (value) => {
        this.setState({
            quoteColor: value
        })
    }

    getFormData = (value) => {
        //Problem 10
        this.setState({
             Name: value
        })
    }

    //Problem 9
    shouldComponentUpdate(nextPops, nextState){
        console.log("nextPops ", nextPops)
        console.log("nextState ", nextState)

        if (this.state.Name == nextState.Name) {
            return false // should not call render method to create virtual dom
        } else {
            return true // keep calling render method     
        }
    }
    render() {
        const cStyle = {
            color: this.state.quoteColor,
            textAlign: "center"
        }

        return(
            <>  
                <h2 style={cStyle}>Sucking is the first step to not sucking - Jake, Adventure Time</h2>
                <h2 style={cStyle}>When the imposter is sus! - a sus guy</h2>   
                <hr/>
                <SuccessChild name={this.state.Name} propComp={<SuccessStory updateQuoteColorInParent={this.updateQuoteColor}/>}/> 
                <hr/>
                <UserSignIn updateUserDisplay={this.getFormData}/>
            </>
        )
    }

}

