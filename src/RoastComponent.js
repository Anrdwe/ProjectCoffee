import React from 'react'
import './style.css'

function RoastComponent(props) {
    return(
        <form className='roastItem'>
            <input type='radio' 
                name='roast' 
                value='light' 
                checked={props.roast==='light'}
                onChange={props.handleChange}/>Light 

            <input type='radio' 
                name='roast' 
                value='medium' 
                checked={props.roast==='medium'}
                onChange={props.handleChange}/>Medium

            <input type='radio' 
                name='roast' 
                value='dark' 
                checked={props.roast==='dark'}
                onChange={props.handleChange}/>Dark 

        </form>
    )
}

export default RoastComponent