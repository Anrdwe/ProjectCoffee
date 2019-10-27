import React from 'react'
import './style.css'

function BeanMixComponent(props) {
    return(
        <form>
        <label className='beanItem'>
            <input type='checkbox'
                checked={props.bean.added} 
                onChange={() => props.handleCheck(props.bean.id)}/>
                {props.bean.name}
        </label>
        </form>
    )
}


export default BeanMixComponent