import React, { Component } from 'react'
// import foodsArray from '../../../foods-info'
// import Container from 'react-bootstrap/Container'
import { Container, Row } from 'react-bootstrap';
class Aboutme extends Component {




    render() {



        return (
            <>
                <Container className="sobreMiContainer" id="sobremi">
                    <h2>Sobre mi</h2>
                    <Row>

                        <div class="sobreMiBlock col-md-4">
                            <div className="titleSobreMiTitle">
                                Desarrollador de Aplicaciones Web
                        </div>

                            <div className="descriptionSobreMiTitle">
                                Me apasiona la tecnología desde pequeñito. Decidí estudiar Desarrollo ya que es la base de todo proyecto. Me encantó el front-end y en ello me especialicé.
                        </div>
                        </div>

                        <div class="sobreMiBlock col-md-4">
                            <div className="titleSobreMiTitle">
                                Emprendimiento · Hallstatt Co. Sunglasses
                        </div>

                            <div className="descriptionSobreMiTitle">
                                Con 17 años emprendí un e-Commerce de venta de productos de moda. Como todo emprendor joven y sin dinero, te las tienes que apañar. Aprendia a diseñar y desarrollar e-Commerce. Tuve que aprender Marketing Digital, CRO, fotografía de producto y de moda, logistica, etc. Una aventura dura pero muy gratificante.
                                </div>
                        </div>

                        <div class="sobreMiBlock col-md-4">
                            <div className="titleSobreMiTitle">
                                UX/UI Designer · Ironhack Madrid
                        </div>

                            <div className="descriptionSobreMiTitle">
                                Estando trabajando como desarrollador web en un agencia de Marketing y Desarrollo de e-Commerce descubrí el UX/UI. Siempre me he fijado en todo diseño tanto físico, como digital. Pensé que podría complementar mucho a mi perfil de desarrollador. Y ahora estoy con muchísimas ganas de seguir aprendiendo.
                                </div>
                        </div>
                    </Row>

                </Container>



            </>
        )
    }
}

export default Aboutme