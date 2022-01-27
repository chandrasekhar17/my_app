import React, { Component } from 'react' 

class Welcome extends React.Component
{
    render()
    {
        return (
        <div>
            <h2>Welcome {this.props.name} and your age is {this.props.age}</h2>
        
        </div>
        
        )
    }
}

export default Welcome