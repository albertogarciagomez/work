import React, { Component } from 'react'
// import foodsArray from '../../../foods-info'
// import Container from 'react-bootstrap/Container'
import { Jumbotron } from 'react-bootstrap';

class PhotoVideo extends Component {

    constructor() {
        super();
        this.state = { foods: ["UX/Ui Designer", "Web Developer", "Photographer & Filmmaker"] }
    }
    render() {
        return (
            <>
                <Jumbotron className="jumboMain">
                    <h2>Photographer & Filmmaker</h2>
                </Jumbotron>

                <Jumbotron className="jumboMain JumboVideo row">
                        <h3 className="col-12">Jardin de las delicias - Cosa de dos</h3>
                    
                        <iframe className="w-100" height="550px" src="https://www.youtube.com/embed/ggide-PsES4?controls=0" loop="1" controls="0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    
                </Jumbotron>
            </>
        )
    }
}

export default PhotoVideo