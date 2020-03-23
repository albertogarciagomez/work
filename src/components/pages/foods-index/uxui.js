import React, { Component } from 'react'
// import foodsArray from '../../../foods-info'
// import Container from 'react-bootstrap/Container'
import { Container, Row } from 'react-bootstrap';
class Content extends Component {


    render() {
        return (
            <Container className="jumboUxUi" id="uxuiAncla">
                <h2>UX/UI Designer</h2>

                <div className="proyecto1">
                    <Row>
                        <div className="col-xs-12 col-md-6">
                            <img src="./img/rentoLogo.png" alt="Logo de Rento"></img>
                            <h3>  Plataforma de alquiler de equipo fotográfico entre particulares   </h3>
                            <a href="">See More >></a>
                        </div>

                        <div className="col-xs-12 col-md-6">
                            <img src="./img/ProyectoFinal1.jpg" alt="Home de Rento"/>
                        </div>
                    </Row>
                </div>

                <div className="proyecto1">
                    <Row>
                        <div className="col-xs-12 col-md-6">
                            <img className="col-8" src="./img/rentoLogo.png"></img>
                            <h3>  Add a feature: Avisame cuando llegues en WhatsApp   </h3>
                            <a href="">See More >></a>
                        </div>

                        <div className="col-xs-12 col-md-6">
                            <img className="col-8" src="./img/ProyectoFinal1.jpg" />
                        </div>
                    </Row>
                </div>
            </Container>
        )
    }
}

export default Content