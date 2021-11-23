// Add BandInput component
import React, { Component } from 'react'

class BandInput extends Component {
//! local state
  state={
    name:''
  }

  handleChange =(event)=>{
    this.setState({
      name: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.addBand(this.state.name)
    this.setState({
      name: ''
    })


  }
  render() {
    return(
      <form
        onSubmit={this.handleSubmit}>
        <input 
          type="text" 
          onChange={this.handleChange}
          value={this.state.name}
          />
        <input type="submit" />
        {this.state.name}
      </form>
    )
  }
}

// const mapStateToProps =(state) => {
//   return {
//     name: state.name
//   }
// }

export default BandInput
