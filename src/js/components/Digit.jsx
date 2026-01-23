import React from "react";

const Digit = (props) => {
    if ('icon' in props) {
        return (
            <div className="col-md-auto bg-dark border border-1 rounded px-3 pt-1">
            <p className="h1 text-light"><i class="fa-regular fa-clock"></i></p>
        </div>
        )
    }
    return (
        <div className="col-md-auto bg-dark border border-1 rounded px-3">
            <p className="h1 text-light">{props.number}</p>
        </div>
    )
}

export default Digit