import React, { Component } from 'react'
// import foodsArray from '../../../foods-info'
// import Container from 'react-bootstrap/Container'
import { Jumbotron } from 'react-bootstrap';

class Copy extends Component {

    constructor() {
        super();
        this.state = { foods: ["UX/Ui Designer", "Web Developer", "Photographer & Filmmaker"] }
    }
    render() {
        return (
            <div className="col-12 text-center py-2">
               Design & develop with ❤️ by me 
            </div>
        )
    }
}

export default Copy