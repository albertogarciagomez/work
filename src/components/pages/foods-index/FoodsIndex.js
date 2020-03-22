import React, { Component } from 'react'
// import foodsArray from '../../../foods-info'
// import Container from 'react-bootstrap/Container'
import { Jumbotron } from 'react-bootstrap';
class Foodsindex extends Component {

    constructor() {
        super();
        this.state = { foods: ["UX/Ui Designer", "Web Developer", "Photographer & Filmmaker"] }
    }
    render() {
        return (
            <>
                <Jumbotron className="jumboMain">
                    <h2>Web Developer</h2>
                </Jumbotron>
            </>
        )
    }
}

export default Foodsindex