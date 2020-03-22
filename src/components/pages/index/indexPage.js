import React, { Component } from 'react'
// import { Container } from 'react-bootstrap'
import { Jumbotron, Container, Row } from 'react-bootstrap';
const IndexPage = () => {

        return (
                <Container  className="homeContainer row m-auto">
                        <div className="homeContainerleft col-md-6 d-none d-md-flex">
                              <img className="col-10 " src="./img/ownPhoto.jpg"></img>
                        </div>
                        <div className="homeContainerright ml-auto col-sm-12 col-md-6 text-left">
                                <div className="containerHomeRight">

                                <div className="homeNombre">
                                        <p>I'M</p>
                                        <h2>ALBERTO</h2>
                                </div>
                
                                <div className="homeThings">
                                        <p>
                                                <a href="">UX/UI DESIGNER</a>
                                        </p>
                                        <p>WEB DEVELOPER</p>
                                        <p>PHOTOGRAPHER & FILMMAKER</p>       
                                </div>

                                
                                <a href="/contact" className="buttonHomeContact">
                                        Contact 
                                </a>

                                </div>
                        </div>
                </Container>
        )
}

export default IndexPage