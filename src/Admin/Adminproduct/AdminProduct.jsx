import React, { useContext, useState } from "react";
import { Mycart } from "../../MainRoter";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Dropdown from "react-bootstrap/Dropdown";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import { Link, useNavigate } from "react-router-dom";
import { MdDelete } from "react-icons/md";

const AdminProduct = () => {
  
  const { item, setItem, Adminviewitem } = useContext(Mycart);

  const [show, setShow] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const filterItemsByCategory = (catogery) => {
    setSelectedCategory(catogery);
    handleClose();
  };

  // Filter items based on selected gender or display all items if selectedGender is null
  const filteredItems = selectedCategory
    ? item.filter((item) => item.catogery === selectedCategory)
    : item;
  const Deleteitem = (id) => {
    const newdelet = item.filter((item) => item.id !== id);
    setItem(newdelet);
  };
  return (
    <div>
      
      <div className="container mt-5">
        
        <Dropdown as={ButtonGroup}>
        <Link to={"/admin/addproduct"}>
        <Button className="btn btn-lg" style={{ backgroundColor: "#Ee222a", color: "white", marginRight: "10px", border: "none" }}>Add Product</Button>
        </Link>
          
        <Button className="btn btn-lg" style={{ backgroundColor: "#Ee222a", color: "white", border: "none" }}>Category</Button>

          <Dropdown.Toggle
            split
            style={{ backgroundColor: "#Ee222a" }}
            id="dropdown-split-basic"
          />

          <Dropdown.Menu>
            <Dropdown.Item onClick={() => filterItemsByCategory("men")}>
              Men
            </Dropdown.Item>
            <Dropdown.Item onClick={() => filterItemsByCategory("women")}>
              Women
            </Dropdown.Item>
            <Dropdown.Item onClick={() => setSelectedCategory(null)}>
              All
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
      
      <div className="container mt-5">
        <div className="row">
          {filteredItems.map((filteredItem) => (
            <CardGroup
              className="cardGroup col-lg-3 col-md-6"
              key={filteredItem.id}
            >
              <Card className="mb-4">
                <Card.Img variant="top" src={filteredItem.image} />
                <Card.Body>
                  <Card.Title>{filteredItem.title}</Card.Title>
                  <Card.Text>${filteredItem.price}</Card.Text>
                  <MdDelete
                    onClick={() => Deleteitem(filteredItem.id)}
                    style={{ fontSize: "23px", color: "#818181" }}
                  />
                </Card.Body>

                <Card.Footer className="buttonstyle">
                  <small
                    onClick={() => Adminviewitem(filteredItem.id)}
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

export default AdminProduct;
