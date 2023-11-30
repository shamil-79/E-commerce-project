import React, { useContext, useState } from "react";
import { Form, Button, Container } from "react-bootstrap";
import { Mycart } from "../../MainRoter";

const AddProduct = () => {
    const { item, setItem } = useContext(Mycart);
    const [passid, setPassId] = useState(15);
    const [product, setProduct] = useState({
      id: "",
      title: "",
      catogery: "",
      gender: "",
      details: "",
      image: "",
      qty: "",
      price: "",
    });
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setProduct({ ...product, [name]: value });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      const newProduct = { ...product, id: passid };
      setPassId(passid + 1); // Increment passid for the next product
  
      const newAdd = [...item, newProduct];
      setItem(newAdd);
      setProduct({
        id: "",
        title: "",
        catogery: "",
        gender: "",
        details: "",
        image: "",
        qty: "",
        price: "",
      });
  
      alert("Submitted Product: " + JSON.stringify(newProduct.title));
    };
  console.log(item)
  

  return (
    <Container style={{marginTop:"30px"}}>
    <Form onSubmit={handleSubmit} >
      <Form.Group controlId="title">
        <Form.Label>Title</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter title"
          name="title"
          value={product.title}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group controlId="details">
        <Form.Label>Details</Form.Label>
        <Form.Control
          as="textarea"
          placeholder="Enter details"
          name="details"
          value={product.details}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group controlId="catogery">
        <Form.Label>Category</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter category"
          name="catogery"
          value={product.catogery}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group controlId="gender">
        <Form.Label>Gender</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter gender"
          name="gender"
          value={product.gender}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group controlId="image">
        <Form.Label>Image URL</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter image URL"
          name="image"
          value={product.image}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group controlId="price">
        <Form.Label>Price</Form.Label>
        <Form.Control
          type="number"
          placeholder="Enter the Price"
          name="price" /* Change name attribute to lowercase */
          value={product.price}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group controlId="qty">
        <Form.Label>Quantity</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter Quantity"
          name="qty"
          value={product.qty}
          onChange={handleChange}
        />
      </Form.Group>
     
     

      <Button className="btn  btn-lg btn-block" style={{ backgroundColor: "#Ee222a",color:"white"  }} type="submit">
        Add Product
      </Button>
    </Form>
    </Container>
  );
};

export default AddProduct;
