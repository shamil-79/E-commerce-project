import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Link } from "react-router-dom";
import { useState } from "react";

const NavBar3 = ({
  item,
  handelSearch,
  handlechange,
  loguser,
  handleLogout,
  isLoggedIn,
}) => {
  const expandOptions = [false, "sm", "md", "lg", "xl", "xxl"];

  const selectedExpand = expandOptions[1];

  return (
    <>
      <Navbar expand={selectedExpand} className="bg-body-tertiary ">
        <Container fluid>
          <Navbar.Brand href="/">
            <img style={{maxHeight:50}} src={require('../Assets/shoelogomain.jpg')} alt="" />
            <span style={{color:"#818181"}}>SHOE</span> <span style={{ color: "#Ee222a" }}>ME</span>
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls={`offcanvasNavbar-expand-${selectedExpand}`}
          />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-${selectedExpand}`}
            aria-labelledby={`offcanvasNavbarLabel-expand-${selectedExpand}`}
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title
                id={`offcanvasNavbarLabel-expand-${selectedExpand}`}
              >
                SHOE <span style={{ color: "rgb(255, 0, 0)" }}>ME</span>
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link>
                  <Link to="/" className="text-decoration-none text-dark">
                    {" "}
                    Home
                  </Link>
                </Nav.Link>
                <Nav.Link>
                  <Link to="/shop" className="text-decoration-none text-dark">
                    Shop
                  </Link>
                </Nav.Link>
                <Nav.Link>
                  <Link to="/admin" className="text-decoration-none text-dark">
                  <i style={{ color: "rgb(255, 0, 0)" }} class="bi bi-person-fill-lock"></i>
                    Admin
                  </Link>
                </Nav.Link>

                <Nav.Link>
                  <Link to="/cart" className="link-color">
                  <i style={{ color: "rgb(255, 0, 0)" }} class="bi bi-cart2"></i>
                  </Link>
                </Nav.Link>
                {isLoggedIn ? (
                  <div className="">
                    <Button
                      style={{ maxHeight: 40 }}
                      onClick={() => {
                        handleLogout();
                      }}
                      variant="outline-danger"
                    >
                      Logout
                    </Button>

                    <i style={{ color: "rgb(255, 0, 0)",maxHeight:"50px" }} class="bi bi-person-fill"></i>

                    <small> :{loguser.name}</small>
                  </div>
                ) : (
                  <>
                    <Nav.Link>
                      <Link
                        to="/register"
                        className="text-decoration-none text-dark"
                      >
                        Singup
                      </Link>
                    </Nav.Link>
                    <Nav.Link>
                      <Link
                        to="/login"
                        className="text-decoration-none text-dark"
                      >
                        Login
                      </Link>
                    </Nav.Link>
                  </>
                )}

                {/* <NavDropdown
                    title="Dropdown"
                    id={`offcanvasNavbarDropdown-expand-${selectedExpand}`}
                  >
                    <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">Something else here</NavDropdown.Item>
                  </NavDropdown> */}
              </Nav>

              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                  onChange={handlechange}
                />
                <Button
                  style={{ maxHeight: 40 }}
                  onClick={() => {
                    handelSearch();
                  }}
                  variant="outline-danger"
                >
                  Search
                </Button>

                {/* <img className=""
                      style={{ height: 30, marginRight:"10px", marginLeft:"30px" }}
                      src={require("../Assets/user.png")}
                      alt=""
                    /> */}
              </Form>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar3;
