import React from "react"; 
import './Button.css';




function ButtonPrev (props) {
    return (
        <>
        <div className="d-flex justify-content-start Button">
        <button className="ButtonPrev" onClick= {props.onButtonClick()}>previous</button>
        </div>

        <p>{props.prev}</p>
        </>
    )
}

function ButtonNext (props) {
    
    return (
        <>
        <div className="d-flex justify-content-end Button">
        <button className="ButtonNext" onClick={()=>{props.onButttonClick()} }>next</button>
        </div>

        <p>{props.next}</p>
        </>
    )
}

export {ButtonPrev, ButtonNext}