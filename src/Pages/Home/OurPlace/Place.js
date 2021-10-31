import React from 'react';
import { Card, Button } from "react-bootstrap";
import { Link } from 'react-router-dom';

const Place = (props) => {
    const {_id, placeName,placeDescription,photoUrl,price} = props?.place || {}
    return (
      <div className="col-md-4 ">
        <Card className="mx-auto m-3" style={{ width: "18rem" }}>
          <Card.Img variant="top" src={photoUrl} />
          <Card.Body>
            <Card.Title>{placeName}</Card.Title>
            <Card.Text>{price}</Card.Text>
            <Card.Text>{placeDescription}</Card.Text>
            <Link to={`/placeOrder/:${_id}`}>
              <Button variant="primary">Book Now </Button>
            </Link>
          </Card.Body>
        </Card>
      </div>
    );
};

export default Place;