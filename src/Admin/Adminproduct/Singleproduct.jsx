import React, { useContext } from 'react'
import Container from "react-bootstrap/Container";
import { Mycart } from '../../MainRoter';
import { FaEdit } from "react-icons/fa";
import { Link } from 'react-router-dom';


const Singleproduct = () => {
    const{adminnewitem}=useContext(Mycart)

  
  return (
    <div>
      <Container>
       
      {adminnewitem?.map((item) => (
        
       <div className="card mt-5" key={item.id}>
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
                <h3 className="card-title">{item.title}</h3>
                <p className="card-text"></p>
                <h6 className="card-text">
                  <small className="text-muted">${item.price}</small>
                </h6>
                <h6 className="card-text">
                  <small className="text-muted">
                    {item.details}
                    {item.details}
                  </small>
                </h6>
                <h5 className="card-text">
                  quantity :  {item.qty}
                </h5>
                    <br />      
              </div>
              <small>Edit : </small>
              <Link to={`/admin/edit/${item.id}`}>
            <FaEdit style={{ fontSize: '33px', color: '#818181' }} />
          </Link>
            </div>
          </div>
        </div>
        
      ))}
    </Container>
    </div>
  )
}

export default Singleproduct
