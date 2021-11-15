import React from 'react'

function Month(props) {
    return  (
        <div>
            <h2>{props.month}</h2>
        </div>

    )
}

export default Month;

// {this.state.months.map((month) => <Month month={month}/>)}