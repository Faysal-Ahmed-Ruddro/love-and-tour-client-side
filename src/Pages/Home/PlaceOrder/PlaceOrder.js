import React, { useEffect, useState } from 'react';
import "./PlaceOrder.css"
import { useForm } from "react-hook-form";
import { useParams } from 'react-router';
import { Card } from 'react-bootstrap';

const PlaceOrder = () => {
const {id} = useParams();
const { register, handleSubmit } = useForm();
const onSubmit = (data) => console.log(data);

const [place,setPlace] = useState([])
useEffect(()=>{
  fetch(`http://localhost:5000/places${id}`)
  .then(res => res.json())
  .then(data => setPlace(data))
},[])

    return (
      <>
        <div className="row">
          <div >
            <form onSubmit={handleSubmit(onSubmit)}>
              <input {...register("Name")} placeholder="Name" />
              <input {...register("Email")} placeholder="Eamil" />
              <input {...register("Address")} placeholder="Address" />
              <input type="number" {...register("phone")} placeholder="phone" />
              <input type="submit" />
            </form>
          </div>
        </div>
      </>
    );
};

export default PlaceOrder;