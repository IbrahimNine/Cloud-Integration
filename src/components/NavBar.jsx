import { Container } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <Navbar expand="lg" className="bg-dark">
      <Container>
        <Navbar.Brand href="/" className="text-light fs-3">
          My Dastination
        </Navbar.Brand>
        <div className="options-Container">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">Contact & About Us</NavLink>
        </div>
      </Container>
    </Navbar>
  );
}

export default NavBar;
