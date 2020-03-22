import React, { Component } from 'react'
// import foodsArray from '../../../foods-info'
// import Container from 'react-bootstrap/Container'
class Contact extends Component {


    constructor(props) {
        super(props);
        this.state = {
          name: '',
          email: '',
          message: ''
        }
      }
    
    render() {
     return(
       <div className="ownFormContact col-12">
           
           
       <form id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST" >
       <h2>Contact Me!</h2>
            <input type="text" className="inputNameContact" value={this.state.name} onChange={this.onNameChange.bind(this)} placeholder="Name"/>
            <input type="email" className="inputEmailContact" aria-describedby="emailHelp" value={this.state.email} onChange={this.onEmailChange.bind(this)} placeholder="Email"/>
            <textarea className="inputMessageContact" rows="5" value={this.state.message} onChange={this.onMessageChange.bind(this)} placeholder="Message"/>
        <button type="submit" className="inputSumbitContact">Send</button>
        </form>
        </div>
     );
    }
    
      onNameChange(event) {
        this.setState({name: event.target.value})
      }
    
      onEmailChange(event) {
        this.setState({email: event.target.value})
      }
    
      onMessageChange(event) {
        this.setState({message: event.target.value})
      }
    
    handleSubmit(event) {
    }

    
}

export default Contact