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


                                        <a href="mailto:albertogarciagomez18@gmail.com" className="buttonHomeContact">
                                                Contact >
                                        </a>
                                        
                                        
                                </div>
                        </div>
                        <div className="homeContainerleft col-md-6 d-none d-md-flex">
                                <img className="col-10 ml-auto" src="./img/ownPhoto.jpg"></img>
                        </div>
                        <a href="#uxuiAncla" className="toprojects">
                                        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" x="0px" y="0px" viewBox="0 0 100 125" enable-background="new 0 0 100 100"><path fill="none" stroke="#000000" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="  M50.1,63.5L10.8,24.2c-3.6-3.6-9.9-1.1-9.9,4.1v0c0,1.5,0.6,3,1.7,4.1l43.3,43.3c2.3,2.3,5.9,2.3,8.2,0l43.3-43.3  c1.1-1.1,1.7-2.6,1.7-4.1v0c0-5.2-6.2-7.7-9.9-4.1L50.1,63.5"/></svg>     
                                        </a>
                </Container>


        )
}

export default IndexPage