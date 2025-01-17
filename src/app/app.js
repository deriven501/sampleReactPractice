import React, {Component} from "react";
import "./app.css"
import Success from "./CommonComponent/Success";
//Assessment #4 react and its fundamentals - 16/05/2024

//1. create a webpack setup, index html and one css file to show css in next questions
//2. how react renders dom in conservative manner - explain
//3. create a class component named - Success and show some quotes (messages) on success in it
//4. create a functional component SuccessChild, make it child of Success and pass Name and Address to it from Success
//5. create SuccessStory as another component, pass this as props in SuccessChild from Success component
//6. create UserSignIn component using uncontrolled way, should be class component
//7. explain how virtual dom works 
//8. pass a random value from SuccessStory component back to Success
//9. Create a class component and show all the life cycle hooks/methods - Uses ShouldComponentUpdate in Success Component to update name state
//10. Make a state change, the state should be duplicate and then stop it to call render method to improve efficiency.

export default class ApplicationComponent extends Component {
    render(){
        return(
            <>
                <div className="bgdiv">
                    <h1>This is a sample react application component</h1>
                    <hr/>
                    <Success/>
                    
                </div>
            </>
        )
    }
}