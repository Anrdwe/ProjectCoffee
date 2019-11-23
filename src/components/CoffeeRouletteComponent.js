import React from 'react'
import '../styles/style.css'

function CoffeeRouletteComponent(props) {
    return (
        <button className='coffeeRouletteButton'
            onClick={props.randomChange}>Coffee Roulette!</button>
    )
}

export default CoffeeRouletteComponent