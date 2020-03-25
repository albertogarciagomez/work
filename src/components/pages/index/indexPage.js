import React, { Component } from 'react'
// import { Container } from 'react-bootstrap'
import { Container } from 'react-bootstrap';
const IndexPage = () => {

        return (
                <Container className="homeContainer row m-auto">
                        <div className="homeContainerright ml-auto col-sm-12 col-md-6 text-left">
                                <div className="containerHomeRight">

                                        <div className="homeThings">
                                                <p>¡Hola! </p>
                                                <h2>Soy Alberto </h2>
                                                <p>
                                                        Un desarrollador web reconvertido en diseñador Ux/Ui. A veces tambien hago videos y fotos.
                                                </p>
                                        </div>


                                        <a href="#contact" className="buttonHomeContact">
                                                Contact >
                                        </a>
                                        
                                        <a href="#contact" className="toprojects">
                                         Proyectos<br/>  🔽     
                                        </a>
                                </div>
                        </div>
                        <div className="homeContainerleft col-md-6 d-none d-md-flex">
                                <img className="col-10 ml-auto" src="./img/ownPhoto.jpg"></img>
                        </div>
                </Container>


        )
}

export default IndexPage