import React, { useEffect, useState } from 'react';
import { Button, Card, } from 'react-bootstrap';

const ManagePlaces = () => {
    const [allPlace,setAllPlace] = useState([])
    useEffect(()=>{
        fetch("http://localhost:5000/places")
        .then(res => res.json())
        .then(data => setAllPlace(data))
    },[])

    const handleDelete = id =>{
        const url = `http://localhost:5000/places/${id}`;
        if(window.confirm("Are you sure you want to delete?")){
            
            fetch(url, {
              method: "DELETE",
            })
              .then((res) => res.json())
              .then((data) => {
                if (data.deletedCount > 0) {
                  alert("Deleted Successfully");
                }
                const remainingPlace = allPlace.filter(
                  (place) => place._id !== id
                );
                setAllPlace(remainingPlace);
              });
        }
    }
    return (
      <div>
        <h2>Manage Place</h2>
        <h4>All Places : {allPlace.length}</h4>
        <div className="row">
          {allPlace.map((place) => (
            <div className="col-lg-4" key={place?.key}>
              <Card className="mx-auto m-3" style={{ width: "18rem" }}>
                <img src={place?.photoUrl} alt="" />
                <Card.Body>
                  <Card.Title>{place?.placeName}</Card.Title>
                  <Card.Text>{place?.price}</Card.Text>
                  <Card.Text>{place?.placeDescription}</Card.Text>
                  <Button onClick={() => handleDelete(place?._id)}>
                    Delete
                  </Button>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      </div>
    );
};

export default ManagePlaces;