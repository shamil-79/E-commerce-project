import React from "react";
import Container from "react-bootstrap/Container";
import Button from 'react-bootstrap/Button';

const SIngleProduct = ({ newitem,addtoCart }) => {
  return (
    <Container style={{marginTop:"100px",marginBottom:"100px"}}>
      {newitem?.map((item) => (
        <div className="card mt-5"  key={item.id}>
          <div className="row g-0">
            <div className="col-md-4">
              <img
                src={item.image}
                alt="Trendy Pants and Shoes"
                className="img-fluid rounded-start"
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h3 className="card-title" style={{marginTop:"40px",marginBottom:"40px"}}>{item.title}</h3>
                <p className="card-text"></p>
                <h6 className="card-text">
                  <small className="text-muted"style={{marginTop:"40px",marginBottom:"40px"}} >${item.price}</small>
                </h6>
                <h6 className="card-text" style={{marginTop:"40px",marginBottom:"40px"}}>
                  <small className="text-muted" >
                    {item.details}
                    {item.details}
                  </small>
                </h6><br />
                <div className="calculater">
                  {/* <button onClick={() => handelqty(newitem.id)}>+</button>
                  {newitem.qty}
                  <button onClick={() => handelqty2(newitem.id)}>-</button> <br /><br /> */}
                  <Button  onClick={()=>addtoCart(item.id)} variant="danger">ADD TO CART</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </Container>
  );
};

export default SIngleProduct;
