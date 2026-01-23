import React from "react";

const Digit = (props) => {
    return (
        <div className="col-md-auto bg-dark border radius-2 px-3">
            <p className="h1 text-light">{props.number}</p>
        </div>
    )
}

export default Digit