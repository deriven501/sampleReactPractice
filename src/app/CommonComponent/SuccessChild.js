import React from "react";


let SuccessChild = (props)=>{
    let cStyle = {
        color: "green",
        textAlign: "center"
    };

    return(
        
        <>
            <h2 style={cStyle}>da {props.name} from da Aslume said this:</h2>
            {props.propComp}
        </>
    )
}

export default SuccessChild