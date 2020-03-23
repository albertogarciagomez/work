import React, { Component } from 'react'
// import foodsArray from '../../../foods-info'
// import Container from 'react-bootstrap/Container'
import { Container, Row } from 'react-bootstrap';
class Content extends Component {




    render() {

        $(document).ready(function() {
            $('a[href^="#"]').click(function() {
              var destino = $(this.hash);
              if (destino.length == 0) {
                destino = $('a[name="' + this.hash.substr(1) + '"]');
              }
              if (destino.length == 0) {
                destino = $('html');
              }
              $('html, body').animate({ scrollTop: destino.offset().top }, 500);
              return false;
            });
          });
          
        return (
            <>  
                <Container className="jumboUxUi" id="uxuiAncla">
                    <h2>UX/UI Designer</h2>

                    <div className="proyecto">
                        <Row>
                            <div className="col-xs-12 col-md-6 textoCard centro">
                                <div>
                                <h2>RENTO</h2>
                                <h3 className="col-12">  Plataforma de alquiler de equipo fotográfico entre particulares   </h3>
                                <a className="col-12" href="">See More ></a>
                                </div>
                            </div>

                            <div className="col-xs-12 col-md-6 text-center">
                                <img  className="w-50" src="./img/ProyectoFinal1.jpg" alt="Home de Rento" />
                            </div>
                        </Row>
                    </div>

                    <div className="proyecto row">
                        
                            <div className="col-xs-12 col-md-6 textoCard centro">
                                <div>
                                <h2 className="col-12">WhatsApp: Avisame cuando llegues</h2>
                                <h3 className="col-12">  Funcionalidad para WhatsApp. Envía un mensaje automático a un ser querido cuando llegas a casa  </h3>
                                <a className="col-12" href="https://medium.com/@albertogarciagomez18/case-study-ux-ui-week-3-funcionalidad-para-whatsapp-avisame-cuando-llegues-97dba9aa9c4f">See More ></a>
                                </div>
                            </div>

                            <div className="col-xs-12 col-md-6 text-center centro">
                                <img  className="w-100" src="./img/displaysACLL.jpeg" alt="Home de Rento" />
                            </div>
                        
                    </div>

                </Container>


         
            </>
        )
    }
}

export default Content