import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { Container } from 'react-bootstrap';


const Navigation = () => {
    return (
        <Navbar  expand="md">
            <Container>
            <Navbar.Brand href="#top"><div className="logo">ALBERTOGARCIA</div></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                
                <Nav className="">
                     <Nav.Link href="#uxuiAncla">Proyectos</Nav.Link> 
                     <Nav.Link href="#contact">Contact</Nav.Link> 
                    {/* <Nav.Link href="#uxuiAncla">Ux/Ui</Nav.Link> 
                    <Nav.Link href="/work/web">WebDevelop</Nav.Link>
                    <Nav.Link href="/work/photovideo">Photo&video</Nav.Link>  
                    <Nav.Link href="#contact">Contact</Nav.Link> */}
                    <Nav.Link href="https://www.linkedin.com/in/albertogarciagomez/">
                    LinkedIn
                    </Nav.Link>
                    <Nav.Link href="https://medium.com/@albertogarciagomez18">
                    Medium
                    </Nav.Link>
                    <Nav.Link href="https://medium.com/@albertogarciagomez18">
                    YouTube
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    )

}

export default Navigation;