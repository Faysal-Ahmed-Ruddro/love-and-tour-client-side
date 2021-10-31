import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import "./AddPlace.css";

const AddPlace = () => {
  const { register, handleSubmit , reset} = useForm();
  const onSubmit = (data) => {
    console.log(data);
    axios.post("http://localhost:5000/places", data)
    .then((res) => {
      if(res.data.insertedId){
        alert("Places Added SuccessFully")
        reset();
      }
    });
  };
  return (
    <div className="addPlace">
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          placeholder="Name"
          {...register("placeName", { required: true, maxLength: 20 })}
        />
        <input placeholder="Price" type="number" {...register("price")} />
        <input placeholder="Image Url" {...register("photoUrl")} />
        <textarea placeholder="Description" {...register("placeDescription")} />
        <input placeholder type="submit" />
      </form>
    </div>
  );
};

export default AddPlace;
