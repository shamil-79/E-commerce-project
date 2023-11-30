import React from 'react'
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";

const SrchEngine = ({result,viewitem}) => {
  return (
    <div>
      <div className="container mt-5">
        <div className="row">
          {result.map((item) => (
            <CardGroup className="cardGroup col-lg-3 col-md-6" key={item.id}>
              <Card className="mb-4">
                <Card.Img variant="top" src={item.image} />
                <Card.Body>
                  <Card.Title>{item.title}</Card.Title>
                  <Card.Text>${item.price}</Card.Text>
                </Card.Body>
                <Card.Footer className="buttonstyle">
                  <small
                    onClick={() => viewitem(item.id)}
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
  )
}

export default SrchEngine
