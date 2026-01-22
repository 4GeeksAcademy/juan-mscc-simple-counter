import React from "react";
import Digit from "./Digit";

const SecondsCounter = (props) => {
    let seconds = props.seconds
    let digits = []
    for (let i = 0; i < 6; i++){
        if (seconds > 0){
            digits.unshift(seconds % (10))
            seconds = Math.floor(seconds / 10)
            continue;
        }
        digits.unshift(0)
    }


    return (
        <div className="container bg-black py-5" style={{maxWidth: "600px"}}>
            <div className="row column-gap-3 justify-content-center mx-4">
                {console.log(digits)}
                <Digit />
                <Digit />
                <Digit />
                <Digit />
                <Digit />
                <Digit />
                <Digit />
            </div>
        </div>
    );
}

export default SecondsCounter