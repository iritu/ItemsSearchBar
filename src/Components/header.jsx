import {Navbar, Container, Nav, NavDropdown} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Header(){
    return ( 
       
        <Navbar collapseOnSelect expand="lg"  >
        <Container>
        <Navbar.Brand href="#home">Search items</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="https://iritu.github.io/movieapp/#/Persons">Similar solution</Nav.Link>
            <Nav.Link href="https://iritu.github.io/ReactSPADemo/#">Simple SPA demo</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="https://iritu.github.io/todolistapp/">ToDo demo app</Nav.Link>
            <Nav.Link eventKey={2} href="https://iritu.github.io/mngbldnglife/#/">
             HAM Project
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>
     
    )
}

export default Header; 