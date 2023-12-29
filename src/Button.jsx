import React from 'react'


export default function Button(props) {
    return (
        <div className='container d-flex justify-content-end amlan2'>
            <button className="btn btn-secondary px-5 p-3" onClick={props.handleOnClick} type="submit" value="Submit"><b>SUBMIT</b></button>
        </div>
    )

}
