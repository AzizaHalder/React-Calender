import React from "react";

function Day(props) {
    return (
        <div className="Day">
            <table>
                <tbody className = "w-100">
                <tr className="d-flex justify-content-center">
                    {props.day.map((day, index) => <th key={index} className= "m-5">{day}</th>)}
                </tr>  
                </tbody>          
            </table>
        </div>
    )
}


export default Day;

//  {this.state.week.map((item)=> <Day day={item } />)}