import React, { useContext } from "react";
import Container from "react-bootstrap/Container";
import { Mycart } from "../MainRoter";
import { useNavigate } from "react-router-dom";
import { Image } from "react-bootstrap";

const Cart = () => {
  const nav = useNavigate();
  
  
  const { cart, setCart,orderdetails,setOrderDetails } = useContext(Mycart);
  console.log(cart);
  const increment = (id) => {
    const cartnew = cart.map((item) =>
      item.id === id ? { ...item, qty: item.qty + 1 } : item
    );
    setCart(cartnew);
  };
  const decrement = (id) => {
    const cartnew = cart.map((item) =>
      item.id === id ? { ...item, qty: item.qty - 1 } : item
    );
    const filter = cartnew.filter((item) => item.qty > 0);
    setCart(filter);
  };
  const remove = (index) => {
    const removeitem = [...cart];
    removeitem.splice(index, 1);
    setCart(removeitem);
  };

  const totalPrice = cart.reduce((total, item) => total + item.price * item.qty, 0);
  const handleCheckout = () => {

    if (cart.length === 0) {
      
      alert("Your cart is empty. Please add items to proceed.");
      nav('/shop')
    } else {
      setOrderDetails(cart)
      
      nav("/pay");
      setCart([])

    }
  };
  console.log(orderdetails)

  return (
    <Container>
      <h1>YOUR ITEMS</h1>

      {cart.map((item, index) => (
        <div key={item.id} className="card mb-3">
          <div className="row g-0">
            <div className="col-md-1">
              <Image src={item.image} alt={item.title} fluid />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                
                <div className="d-flex justify-content-around align-items-center mt-3">
                <h6 className="card-title mt-2 ">{item.title}</h6>
                  <button className="btn  me-1" style={{ backgroundColor: "#818181" }} onClick={() => decrement(item.id)}>-</button>
                  <label htmlFor="quantity">Qty:</label>
                  <input
                    id={`quantity_${item.id}`}
                    min="0"
                    name="quantity"
                    value={item.qty}
                    type="number"
                    className="form-control w-25 me-2"
                    readOnly
                  />
                  <button className="btn  me-2" style={{ backgroundColor: "#818181" }} onClick={() => increment(item.id)}>+</button>
                  <strong className="me-2">Price : {`$${item.price * item.qty}`}</strong>
                  <button className="btn " style={{ backgroundColor: "#Ee222a",color:"white"  }} onClick={() => remove(index)}>Remove</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      <div className="card">
        <div className="card-header">
          <h5>Summary</h5>
        </div>
        <div className="card-body">
          <ul className="list-group list-group-flush">
            <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
              Products
              <span>{`$${totalPrice}`}</span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center px-0">
              Shipping
              <span>Gratis</span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
              <div>
                <strong>Total (including VAT)</strong>
              </div>
              <span>
                <strong>{`$${totalPrice}`}</strong>
              </span>
            </li>
          </ul>

          <button type="button" className="btn btn-primary btn-lg btn-block" onClick={() =>handleCheckout()}>Go to checkout</button>
        </div>
      </div>
    </Container>
  );
};

export default Cart;
