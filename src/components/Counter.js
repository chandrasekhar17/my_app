import React, { Component } from 'react'

class Counter extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count : 0
        }
    }
    incrementCount()
    {
        this.setState({
            count : this.state.count + 1 
        })
        console.log(this.state.count)

    }
    
    render() {
        return (
            <div>
                <div><h2>count - {this.state.count}</h2></div>
                <button onClick={() => this.incrementCount()}>Click</button>
            </div>
        ) 
    }
}

export default Counter
