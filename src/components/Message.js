import React from "react";

class Message extends React.Component 
{
    constructor(props) {
        super(props)
    
        this.state = {
             message : 'Welcome Visitor'
        }
    }
    
    changeMessage()
    {
        this.setState({
            message :'thanks for subscribing'
        })
    }
    render()
{
    return (
        <div>
            <h1>{this.state.message}</h1>
            <button onClick={this.changeMessage.bind(this)}>Subscribe</button>
        </div>
    )
}
}


{/*import React, { Component } from 'react' 

class Message extends React.Component

{
    constructor()
    {
        super()
        this.state  = {
            message: 'Welcome Visitor'
        }
    }
    changeMessage()
    {
        this.setState({
            message : 'thank you for subscribing'
        })
    }
    render()
    {
        return (
        <div>
            <h2>{this.state.message}</h2>
            <button onClick={() => this.changeMessage()}>Subscribe</button>
        
        </div>
        
        )
    }
}*/}

export default Message