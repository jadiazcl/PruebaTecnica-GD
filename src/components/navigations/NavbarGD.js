import logo from "media/logo.svg";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const navegation = [
  { name: "Estaciones", href: "/estaciones", current: "false" },
  { name: "LogCache", href: "/logcache", current: "false" },
  { name: "Contacto", href: "/contacto", current: "false" },
];

export default function NavbarGD() {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">
            {" "}
            <img
              src={logo}
              width="40"
              height="30"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
            Inicio{" "}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              {navegation.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.href}
                  arial-current={item.current ? "page" : undefined}
                  className={"nav-link"}
                >
                  {item.name}
                </NavLink>
              ))}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
