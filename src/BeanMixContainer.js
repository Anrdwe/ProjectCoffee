import React from 'react'
import BeanMixComponent from './BeanMixComponent'
import './style.css'
import RoastComponent from './RoastComponent'
import CoffeeRoulette from './CoffeeRouletteComponent'

class BeanMixContainer extends React.Component {
    constructor() {
        super()
        this.state = {
            coffeeBeans: [
                {id: 1,
                name: 'Columbia',
                added: false},
                {id: 2,
                name: 'CostaRica',
                added: false},
                {id: 3,
                name: 'Guatemala',
                added: false},
                {id:4,
                name: 'Burundi',
                added: false}
            ],
            roast: "",
            isSubmit: false
        }
        this.handleChange=this.handleChange.bind(this)
        this.handleCheck=this.handleCheck.bind(this)
        this.randomChange=this.randomChange.bind(this)
        this.handleSubmit=this.handleSubmit.bind(this)
    }
    handleCheck(id) {
        this.setState(prevState => {
            const updatedCoffeeBeans = prevState.coffeeBeans.map(bean => {
                if (id === bean.id) {
                    bean.added = !bean.added
                }
                return bean
            })
            return {
                coffeeBeans: updatedCoffeeBeans
            }
        })
    }

    handleChange(event) {
        const {name, type, value, key} = event.target
        this.setState({
            [name]: value
        })  
    }

    randomChange() {
        const roasts = ['light', 'medium', 'dark']
        const randomRoast = roasts[Math.round(Math.random()*2)]
        const torf = [true,false]
        this.setState(prevState => {
            const randomBeans = prevState.coffeeBeans.map(bean => {
                if (torf[Math.round(Math.random())]) {
                bean.added = !bean.added 
                }
                return bean
            })
            return {coffeeBeans: randomBeans}
        })         
        this.setState({
            roast: randomRoast

        })
    }

    handleSubmit(event) {
        event.preventDefault()
        this.setState({isSubmit: true})


    }

    render() {
        const BeanMixData = this.state.coffeeBeans.map(bean =>
            <BeanMixComponent
                    key={bean.id}
                    bean={bean}
                    handleCheck={this.handleCheck}/>)
        const BeanDisplay = this.state.coffeeBeans.map(bean => bean.added ? <p>{bean.name} </p> : null)
        return(
            <div className='beanList'>
                <div className='header'>CoffeeShop</div>
                <div className='title'>Select your beans</div>
                {BeanMixData}
                <br/>
                <div className='title'>Roast</div>
                <br/>
                <RoastComponent handleChange={this.handleChange} roast={this.state.roast}/>
                <br/>
                <CoffeeRoulette randomChange={this.randomChange} state={this.state}/>
                <br/>
                <button className='orderButton' onClick={this.handleSubmit}>Order!</button>
                {this.state.isSubmit ? <div className='orderDisplay'>You ordered {this.state.roast} roasted {BeanDisplay} beans</div> : null}
            </div>
        )
    }
}
export default BeanMixContainer;
