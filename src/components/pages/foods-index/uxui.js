import React, { Component } from 'react'
// import foodsArray from '../../../foods-info'
// import Container from 'react-bootstrap/Container'
import { Container, Row } from 'react-bootstrap';
class Content extends Component {


    render() {
        return (
            <>
                <Container className="jumboUxUi" id="uxuiAncla">
                    <h2>UX/UI Designer</h2>

                    <div className="proyecto">
                        <Row>
                            <div className="col-xs-12 col-md-6">
                                <img  className="col-8 mx-auto text-center" src="./img/rentoLogo.png" alt="Logo de Rento"></img>
                                <h3 className="pl-3 col-8 mx-auto text-center">  Plataforma de alquiler de equipo fotográfico entre particulares   </h3>
                                <a href="">See More >></a>
                            </div>

                            <div className="col-xs-12 col-md-6">
                                <img  className="col-8 mx-auto text-center" src="./img/ProyectoFinal1.jpg" alt="Home de Rento" />
                            </div>
                        </Row>
                    </div>

                    <div className="proyecto">
                        <Row>
                            <div className="col-xs-12 col-md-6">
                                <img  className="col-8 mx-auto text-center" src="./img/rentoLogo.png" alt="Logo de Rento"></img>
                                <h3 className="pl-3 col-8 mx-auto text-center">  Avisame cuando llegues: Funcionalidad añadida a WhatsApp   </h3>
                                <a href="">See More >></a>
                            </div>

                            <div className="col-xs-12 col-md-6">
                                <img  className="col-8 mx-auto text-center" src="./img/ProyectoFinal1.jpg" alt="Home de Rento" />
                            </div>
                        </Row>
                    </div>

                </Container>

                <Container className="jumboUxUi" id="uxuiAncla">
                    <h2>Web Developer</h2>

                    <div className="proyecto">
                        <Row>
                            <h2></h2>
                        </Row>
                    </div>

                    
                </Container>
            </>
        )
    }
}

export default Content