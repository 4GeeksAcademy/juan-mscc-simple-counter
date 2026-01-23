import React from "react";



//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import SecondsCounter from "./SecondsCounter";
import Digit from "./Digit";

//create your first component
const Home = (props) => {
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

    let secondsSeparated = digits.map((num, index) => {
        return <Digit key={index} number={num} />
    })
    {console.log(digits)}
    {console.log(secondsSeparated)}

	return (
		<div className="container bg-black py-5" style={{maxWidth: "600px"}}>
            <div className="row column-gap-3 justify-content-center mx-4">
				<Digit icon="hola"/>
                {secondsSeparated}
            </div>
        </div>
	);
};

export default Home;