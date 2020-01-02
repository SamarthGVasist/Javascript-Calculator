import React, { Component } from 'react'

class Key extends React.Component{
    constructor(){
        super()
        
        this.handleClick=this.handleClick.bind(this)
    }
handleClick(event){
    let val=event.target.textContent
   // console.log(event.target.textContent)
   
    this.props.handleDisplay(val)
}

    render()
    {
        return(<div className="numbers" onClick={this.handleClick}  id={this.props.id}>{this.props.letter}</div>)
    }
}
export default Key

