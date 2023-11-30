import React, { useContext } from "react";
import { Mycart } from "../../MainRoter";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import Card from "react-bootstrap/Card";
import Table from "react-bootstrap/Table";

const SingleUser = () => {
  const {
    orderdetails,
    setOrderDetails,
    valUser,
    setvalUser,
    loguser,
    setloguser,
  } = useContext(Mycart);
  console.log(valUser);
  let { id } = useParams();
  let userIndex = parseInt(id);
  const findsingleuser = valUser.find((user, index) => index === userIndex);
  const [findcart, setFindCart] = useState(findsingleuser.order || []);
  // const [element, setElement] = useState();
  // useEffect(() => {
  //   let user = valUser[userIndex];
  //   setElement(user);
  // }, [valUser]);
  // console.log(element);

  return (
    <div style={{ marginTop: "20px" }}>
      <Table responsive bordered hover>
        <thead >
          <tr style={{backgroundColor:"#818181"}}>
            <th style={{backgroundColor:"#818181"}}>Image</th>
            <th style={{backgroundColor:"#818181"}}>Item Name</th>
            {/* <th style={{backgroundColor:"#818181"}}>Details</th> */}
            <th style={{backgroundColor:"#818181"}}>Price</th>
            <th style={{backgroundColor:"#818181"}}>Quantity</th>
          </tr>
        </thead>
        <tbody>
          {findcart?.map((val, index) => (
            <tr key={index}>
              <td><img style={{maxHeight:"80px"}} src={val.image} alt={val.title} /></td>
              <td>{val.title}</td>
              {/* <td>{val.details}</td> */}
              <td>${val.price*val.qty}</td>
              <td>{val.qty}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default SingleUser;
