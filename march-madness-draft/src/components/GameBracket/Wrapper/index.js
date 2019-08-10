import React from "react";
import "./style.css";

const Wrapper = (props) => {
    return (
        <div className="bracket">{props.children}</div>
    )
};

export default Wrapper;

