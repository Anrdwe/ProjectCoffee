import React from 'react'
import BeanMixComponent from '../components/BeanMixComponent'
import '../styles/style.css'
import RoastComponent from '../components/RoastComponent'
import CoffeeRoulette from '../components/CoffeeRouletteComponent'

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
    //handles the check value of the checkboxes
    handleCheck(id) {
        this.setState(prevState => {
            //every bean in the coffeeBeans list in the state has an id,
            const updatedCoffeeBeans = prevState.coffeeBeans.map(bean => {
                //map goes through the list of Beans to find the id that matches
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
    //general handleChange
    handleChange(event) {
        const {name, value} = event.target
        this.setState({
            [name]: value
        })  
    }
    //randomly change the state
    randomChange() {
        //random roast using Math.random() to get a random index
        const roasts = ['light', 'medium', 'dark']
        const randomRoast = roasts[Math.round(Math.random()*2)]
        //random Beans
        const torf = [true,false]
        this.setState(prevState => {
            const randomBeans = prevState.coffeeBeans.map(bean => {
                //random true or false 
                if (torf[Math.round(Math.random())]) {
                //if true, the value of added changes
                    bean.added = !bean.added 
                }
                return bean
            })
            //return new state with new value of coffeeBeans
            return {coffeeBeans: randomBeans}
        })         
        this.setState({
            //return new state with new value of Roast
            roast: randomRoast
        })
    }
    //handleSubmit changes the value isSubmit to true
    //When isSubmit is true, the order is rendered the user interface
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
        //map the beans that have added = true to an html component to be rendered
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
