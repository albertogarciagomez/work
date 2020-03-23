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
                            <div className="col-xs-12 col-md-6 textoCard centro">
                                <div>
                                <img  className="col-8  " src="./img/rentoLogo.png" alt="Logo de Rento"></img>
                                <h3 className="col-12">  Plataforma de alquiler de equipo fotográfico entre particulares   </h3>
                                <a className="col-12" href="medium.com">See More >></a>
                                </div>
                            </div>

                            <div className="col-xs-12 col-md-6 text-center">
                                <img  className="col-8  " src="./img/ProyectoFinal1.jpg" alt="Home de Rento" />
                            </div>
                        </Row>
                    </div>

                </Container>

         
            </>
        )
    }
}

export default Content