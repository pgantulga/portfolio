// Import Bootstrap modules
// import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from 'react-scroll';

// import { RiReactjsLine } from "react-icons/ri";

const Header = () => {
  return (
    <Navbar variant='light'>
      <Container>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='ms-auto'>
            <Nav.Link as={Link} to='/'>
              <Link to="home" smooth={true}
                offset={-70}
                duration={200}>Home</Link>
            </Nav.Link>
            <Nav.Link as={Link} to='/'>
              <Link to="about" smooth={true}
                offset={-70}
                duration={200}>About</Link>
            </Nav.Link>
            <Nav.Link as={Link} to='/'>
              <Link to="works" smooth={true}
                offset={-70}
                duration={200}>Projects</Link></Nav.Link>
            <Nav.Link as={Link} to='/'>
              <Link to="contact" smooth={true}
                offset={-70}
                duration={200}>Contact</Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;