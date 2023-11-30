import React, { useState } from "react";
import "./css/Shop.css";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import Nav from "react-bootstrap/Nav";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import { Link } from "react-router-dom";

const Shop = ({ item, viewitem }) => {
  const [show, setShow] = useState(false);
  const [selectedGender, setSelectedGender] = useState(null);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const filterItemsByGender = (gender) => {
    setSelectedGender(gender);
    handleClose();
  };

  // Filter items based on selected gender or display all items if selectedGender is null
  const filteredItems = selectedGender
    ? item.filter((item) => item.gender === selectedGender)
    : item;

  return (
    <div className="shopconatiner">
      <div className="filter ">
        <Button className="mt-4" variant="danger" onClick={handleShow}>
          Filter
        </Button>

        <Offcanvas show={show} onHide={handleClose}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title style={{ color: "red" }}>Filter</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav.Link>
              <Link
                className="text-decoration-none text-dark"
                onClick={() => filterItemsByGender("male")}
              >
                Men
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link
                className="text-decoration-none text-dark"
                onClick={() => filterItemsByGender("female")}
              >
                Women
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link 
                className="text-decoration-none text-dark"
                onClick={() => setSelectedGender(null)} 
              >
                All
              </Link>
            </Nav.Link>
          </Offcanvas.Body>
        </Offcanvas>
      </div>

      <div className="container mt-5">
        <div className="row">
          {filteredItems.map((filteredItem) => (
            <CardGroup className="cardGroup col-lg-3 col-md-6" key={filteredItem.id}>
              <Card className="mb-4">
                <Card.Img variant="top" src={filteredItem.image} />
                <Card.Body>
                  <Card.Title>{filteredItem.title}</Card.Title>
                  <Card.Text>${filteredItem.price}</Card.Text>
                </Card.Body>
                <Card.Footer className="buttonstyle">
                  <small
                    onClick={() => viewitem(filteredItem.id)}
                    className="btn text-muted"
                  >
                    View item
                  </small>
                </Card.Footer>
              </Card>
            </CardGroup>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shop;
