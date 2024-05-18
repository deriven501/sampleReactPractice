import React from "react";

let SuccessStory = (props)=>{
    let color = "yellow";

    const cStyle = {
        color: "aqua",
        textAlign: "center",
        props: props.updateQuoteColorInParent(color) //Passing Props back to Success Component
      };

    return(
        <>
            <h2 style={cStyle}>STOP POSTING ABOUT AMONG US! I'M TIRED OF SEEING IT! MY FRIENDS ON TIKTOK SEND ME MEMES, ON DISCORD IT'S F.... MEMES! I was in a server, right? and ALL OF THE CHANNELS were just among us stuff. I-I showed my champion underwear to my girlfriend and t-the logo I flipped it and I said "hey babe, when the underwear is sus HAHA DING DING DING DING DING DING DING DI DI DING" I f..... looked at a trashcan and said "THAT'S A BIT SUSSY" I looked at my face I think of an astronauts helmet and I go "Jason? MORE LIKE jaSUS" AAAAAAAAAAAAAAHGESFG </h2>
            
        </>
    )
}

export default SuccessStory;