import React from 'react';
import { useForm } from "react-hook-form";
import img from "../images/about.png"
import "./About.css"

const About = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
    return (
      <>
        <div >
          <div>
            <div className="about-title-bg">
              <h2 className="about-title">About Us</h2>
            </div>
          </div>
          <div
            style={{ backgroundColor: "skyblue",textAlign: "left" }}
            className=" mx-auto row about-card"
          >
            <div className="col-lg-6">
              <div className="pt-2">
                <img
                  style={{ width: "60%", height: "450px" }}
                  src={img}
                  alt=""
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div>
                <h2 className="fw-bolder mb-4">We Provide 24 / 7 Service</h2>
                <p className=" text-black">
                  Founded in 1979, The Travel Agent, Corporate Travel Management
                  is a second generation family company headquartered in Carmel,
                  Indiana with satellite operations nationwide.
                </p>
                <p className="text-black">
                  We develop and implement custom travel management solutions
                  for each of our clients based on their unique corporate
                  structure and needs.
                </p>
                <p className="text-black">
                  Corporate Travel Management is a second generation family
                  company headquartered in Carmel,
                </p>
                <p className="text-black">
                  We develop and implement custom travel management solutions
                  for each of our clients based on their unique corporate
                  structure and needs.
                </p>
                <p className="text-black">
                  Corporate Travel Management is a second generation family
                  company headquartered in Carmel,
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          style={{ backgroundColor: "#3286e670" }}
          className="py-4"
        >
          <h2 className="text-black fs-1 fw-bolder">Contact Us</h2>
          <div>
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

export default About;